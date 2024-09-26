import { Banknote, Coins } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCobroStore } from "../../stores/cobro-store";
import { COBRO } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";
import { useShallow } from "zustand/react/shallow";

export function Steeps() {
  return (
    <>
      <div className="grid place-items-center">
        <ul className="steps">
          <Link to={"/app/elegircobro"}>
            <li className="step step-primary">Tipo Cobro</li>
          </Link>
          <li className="step">Elegir Fraterno</li>
          <li className="step">Pagos</li>
          <li className="step">Imprimir</li>
        </ul>
      </div>
    </>
  );
}

export function SelectPago() {


  const { setTipoCobro, reset } = useCobroStore(
    useShallow((state) => ({
      setTipoCobro: state.setTipoCobro,
      reset: state.reset,
    }))
  )

  const navigate = useNavigate();

  useEffect(() => {
    reset();
  }, []);

  const mensulidadOnClick = () => {
    setTipoCobro(COBRO.MENSUALIDAD);
    navigate("/app/elegirfrater");
  };

  const extraordinariaOnClick = () => {
    setTipoCobro(COBRO.EXTRAORD);
    navigate("/app/elegirfrater");
  };

  return (
    <TitleCard title="Cobros" topMargin="mt-2">
      <Steeps />
      <div className="grid h-56 place-items-center">
        <div className="grid grid-cols-2 gap-4 content-between">
          <button className="btn btn-primary" onClick={mensulidadOnClick}>
            <Coins className="h-6 w-6" />
            Mensualidad
          </button>

          <button
            disabled={true}
            className="btn btn-primary"
            onClick={extraordinariaOnClick}
          >
            <Banknote className="h-6 w-6" />
            Extraordinaria
          </button>
        </div>
      </div>
    </TitleCard>
  );
}
