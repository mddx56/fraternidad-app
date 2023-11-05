import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import TitleCard from "../common/components/Cards/TitleCard";
import { getAllEventos } from "../../services/eventoService";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { EventoType } from "../../types/EventoType";
import { formattedDate, formattedTime } from "../../utils/dateFormat";
import TipoEvento from "./TipoEvento";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { QUERY_KEY } from "../../utils/constant";
import EventModal from "./EventModal";
import EventoCreate from "./EventoCreate";

interface PropsSideButton {
    onClickBtn: () => void;
}

const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { onClickBtn() }}>Agregar</button>
        </div>
    )
}

function Evento() {

    const navigate = useNavigate();
    const [openNoteModal, setOpenNoteModal] = useState(false);

    const { isLoading, isFetching, isError, data, error } = useQuery<EventoType[], Error>({
        queryKey: [QUERY_KEY.EVENTOS],
        queryFn: () => getAllEventos(),
        onSuccess() {
            NProgress.done();
        },
        onError(error: Error) {
            const resMessage =
                //error.response.data.message ||
                //error.response.data.detail ||
                error.message ||
                error.toString();
            toast(resMessage, {
                type: "error",
                position: "top-right",
            });
            NProgress.done();
        },
    });

    useEffect(() => {
        if (isLoading || isFetching) {
            NProgress.start();
        }
    }, [isLoading, isFetching]);


    if (isLoading) {
        return <span>Cargando...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    const onClickAdd = () => {
        setOpenNoteModal(true)
    }


    return (
        <>
            <EventModal
                openNoteModal={openNoteModal}
                setOpenNoteModal={setOpenNoteModal}
            >
                <EventoCreate setOpenNoteModal={setOpenNoteModal} />
            </EventModal>
            <TitleCard title="Eventos" topMargin="mt-2" TopSideButtons={<TopSideButtons onClickBtn={onClickAdd} />}>
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
                                            <td>{evento.estado_reserva}</td>
                                            <td><TipoEvento Id={evento.tipo_evento} /></td>
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