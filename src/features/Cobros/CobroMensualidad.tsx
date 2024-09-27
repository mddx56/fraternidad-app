import { ArrowLeft, ListCheck, ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useShallow } from "zustand/react/shallow";
import SuspenseContent from "../../containers/SuspenseContent";
import {
  getDeudasMensualids,
  payMensualidades,
} from "../../services/cobro-service";
import { useCobroStore } from "../../stores/cobro-store";
import { useShopCart } from "../../stores/shop-mensualidad";
import { MensualidadDeuda } from "../../types/cobros-type";
import { QUERY_KEY } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";
import MensualidadItem from "./components/MensualidadList";

function Steeps() {
  return (
    <>
      <div className="grid place-items-center">
        <ul className="steps">
          <li className="step step-primary">Tipo Cobro</li>
          <li className="step step-primary">Elegir Fraterno</li>
          <li className="step step-primary">Pagos</li>
          <li className="step">Imprimir</li>
        </ul>
      </div>
      <Link
        to={"/app/elegircobro"}
        className="btn btn-primary btn-circle btn-sm"
      >
        <ArrowLeft />
      </Link>
    </>
  );
}

export function CobroMensualidad() {
  const queryClient = useQueryClient();
  const navigation = useNavigate();
  const { items, addItem, removeItem, clearCart, getTotalPrice } = useShopCart(
    useShallow((state) => ({
      items: state.items,
      addItem: state.addItem,
      removeItem: state.removeItem,
      clearCart: state.clearCart,
      getTotalPrice: state.getTotalPrice,
    }))
  );

  const { idfraterno, cifraterno, namefraterno } = useCobroStore(
    useShallow((state) => ({
      tipoCobro: state.tipoCobro,
      idfraterno: state.idfraterno,
      namefraterno: state.namefraterno,
      cifraterno: state.cifraterno,
      reset: state.reset,
    }))
  );

  const { isLoading, isError, data, error } = useQuery<
    MensualidadDeuda[],
    Error
  >({
    queryKey: [QUERY_KEY.DEUDAMENSUALIDAD],
    queryFn: () => getDeudasMensualids(cifraterno),
  });

  useEffect(() => {
    clearCart();
  }, []);

  if (isLoading) return <SuspenseContent />;
  if (isError) return <span>{error.message}</span>;

  const handlerAdd = (product: MensualidadDeuda) => () => {
    addItem(product);
  };

  const handlerRemove = (id: number) => () => {
    removeItem(id);
  };

  const handlerClearCart = () => {
    clearCart();
  };

  const handlerTotalPrice = (): number => {
    return getTotalPrice();
  };

  const handlePay = async () => {
    const mensuals_ids = items.map((mns) => {
      return mns.mensualidad.id;
    });
    const response = await payMensualidades({
      frater_id: idfraterno,
      mensualidades: mensuals_ids,
    });
    const pago = response.data;
    if (response.status == 200 && pago.status === "success") {
      queryClient.invalidateQueries(QUERY_KEY.DEUDAMENSUALIDAD);
      handlerClearCart();
      navigation("/app/prm")
      toast("Pago Realizado!" + pago.pago.id, {
        type: "success",
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <TitleCard title={`Mensualidades de ${namefraterno}`}>
        <Steeps />
        <div className="">
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <ListCheck />
                  Mensualidades
                </h2>
                <div className="h-full w-full">
                  {data?.map((mensualida, k) => {
                    return (
                      <div key={k}>
                        <MensualidadItem
                          datos={mensualida}
                          onAdd={handlerAdd(mensualida)}
                          onRemove={handlerRemove(mensualida.id)}
                        />
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-between p-1">
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-base font-bold">
                        {items.length === 0 && <p>Cantidad: 0</p>}
                        {items.length > 0 && (
                          <div className="grid columns-1">
                            <p>Cantidad: {items.length}</p>
                          </div>
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <h3>Total: {handlerTotalPrice()}</h3>
                      <span className="h-6 w-6">
                        <ShoppingCart />
                      </span>
                    </div>
                  </div>

                  <div className="card-actions mt-4 justify-end">
                    <button
                      disabled={items.length === 0}
                      className="btn btn-primary"
                      onClick={() => handlePay()}
                    >
                      Pagar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TitleCard>
    </>
  );
}
