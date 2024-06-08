import { Eye, Trash } from "lucide-react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllEventos } from "../../services/evento-service";
import { EventoType } from "../../types/EventoType";
import { QUERY_KEY } from "../../utils/constant";
import { formattedDate, formattedTime } from "../../utils/dateFormat";
import TitleCard from "../common/components/Cards/TitleCard";
import TipoEvento from "./TipoEvento";

interface PropsSideButton {
  onClickBtn: () => void;
}

const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {
  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => {
          onClickBtn();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

function Evento() {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery<EventoType[], Error>({
    queryKey: [QUERY_KEY.EVENTOS],
    queryFn: () => getAllEventos(),
    onSuccess() {
      console.log("ok..");
    },
    onError(error: Error) {
      const resMessage = error.message || error.toString();
      toast(resMessage, {
        type: "error",
        position: "top-right",
      });
    },
  });

  if (isLoading) {
    return <span>Cargando...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const onClickAdd = () => {
    navigate("/app/addevento");
  };

  return (
    <>
      <TitleCard
        title="Eventos"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons onClickBtn={onClickAdd} />}
      >
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-base-200">
                <th className="w-2/12">Fecha</th>
                <th className="w-1/12">Hora Inicio</th>
                <th className="w-1/12">Hora Fin</th>
                <th className="w-2/12">Descripcion</th>
                <th className="w-1/12">Estado</th>
                <th className="w-4/12">Tipo evento</th>
                <th className="w-1/12"></th>
                <th className="w-1/12"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((evento, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="font-bold">
                          {formattedDate(evento.fecha)}
                        </div>
                      </div>
                    </td>
                    <td>{formattedTime(evento.hora_inicio)}</td>
                    <td>{formattedTime(evento.hora_fin)}</td>
                    <td>{evento.descripcion}</td>
                    <td>{evento.estado_reserva}</td>
                    <td>
                      <TipoEvento Id={evento.tipo_evento} />
                    </td>
                    <td>
                      <Link
                        to={`/moto/${evento.id}`}
                        className="btn btn-ghost btn-xs"
                        onClick={() => { }}
                      >
                        <Eye className="w-5" />
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/app/"
                        className="btn btn-ghost btn-xs"
                        onClick={() => { }}
                      >
                        <Trash className="w-5" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}
export default Evento;
