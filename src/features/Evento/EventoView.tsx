import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { EventoType } from "../../types/evento-type";
import { getEvento } from "../../services/evento-service";


const ModalAdd = () => {
    const [evento, setEvento] = useState<EventoType>({} as EventoType);
    const { id } = useParams();
    const { isLoading, data } = useQuery<EventoType>({ queryKey: ['evento', id], queryFn: () => getEvento(id ?? "-1") });
    if (data) {
        setEvento(data);
    }

    if (isLoading) {
        return <><div className="badge badge-primary badge-md" /></>
    }

    return (
        <>
            <span>{evento.fecha}</span>
        </>
    );
}

export default ModalAdd;