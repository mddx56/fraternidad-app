import { formattedTime } from "../../utils/dateFormat";

export const CalendarEvent = ({ event }) => {
    const { evento } = event;
    console.log(evento);
    //const { descripcion } = sa;
    return (
        <>
            <div className="bg-primary p-2" >
                <p className="text-sm">{formattedTime(evento.hora_inicio)} - {formattedTime(evento.hora_fin)}</p>
                <p>{evento.descripcion}</p>
            </div>
        </>
    );
}