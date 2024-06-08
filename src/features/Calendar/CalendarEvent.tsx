import { formattedTime } from "../../utils/dateFormat";

type Props = {
    descripcion: string;
    hora_inicio: string;
    hora_fin: string;
}

export const CalendarEvent = ({ descripcion, hora_fin, hora_inicio }: Props) => {
    return (
        <>
            <div className="bg-primary p-1 border-spacing-px">
                <p className="text-xs">{formattedTime(hora_inicio)} - {formattedTime(hora_fin)}</p>
                <p className="text-xs">{descripcion}</p>
            </div >
        </>
    );
}