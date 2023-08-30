import { formattedTime } from "../../utils/dateFormat";

export const CalendarEvent = ({ event }) => {
    const { evento } = event;
    //const { descripcion } = sa;
    return (
        <>
            <div className="bg-primary p-1 border-spacing-px">
                <p className="text-xs">{formattedTime(evento.hora_inicio)} - {formattedTime(evento.hora_fin)}</p>
                <p className="text-xs">{evento.descripcion}</p>
                <p className="text-xs">{evento.user}</p>
            </div >
        </>
    );
}