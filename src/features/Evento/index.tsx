import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import TitleCard from "../common/components/Cards/TitleCard";
import { getAllEventos } from "../../services/eventoService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { EventoType } from "../../types/EventoType";
import { formattedDate, formattedTime } from "../../utils/dateFormat";
import TipoEvento from "./TipoEvento";


const TopSideButtons = () => {

    // const dispatch = useDispatch()

    //    const openAddNewLeadModal = () => {
    //dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    //  }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { }}>Agregar</button>
        </div>
    )
}

function Evento() {
    //const [eventos, setEventos] = useState<Array<EventoType>>([]);

    const { isLoading, isError, data, error } = useQuery<EventoType[], Error>(['eventos'], getAllEventos)

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <TitleCard title="Eventos" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="bg-base-200">
                                <th  className="w-2/12">Fecha</th>
                                <th  className="w-1/12">Hora Inicio</th>
                                <th  className="w-1/12">Hora Fin</th>
                                <th  className="w-2/12">Descripcion</th>
                                <th className="w-4/12">Tipo evento</th>
                                <th className="w-1/12"></th>
                                <th className="w-1/12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((evento, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="font-bold">{formattedDate(evento.fecha)}</div>
                                                </div>
                                            </td>
                                            <td>{formattedTime(evento.hora_inicio)}</td>
                                            <td>{formattedTime(evento.hora_fin)}</td>
                                            <td>{evento.descripcion}</td>
                                            <td><TipoEvento Id={evento.tipo_evento}/></td>
                                            <td><Link to={`/moto/${evento.id}`} className="btn btn-ghost btn-xs" onClick={() => { }}><EyeIcon className="w-5" /></Link></td>
                                            <td><Link to="/app/" className="btn btn-ghost btn-xs" onClick={() => { }}><TrashIcon className="w-5" /></Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    );
}
export default Evento;