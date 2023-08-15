import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { EventoType } from "../../types/EventoType";
import { getEvento } from "../../services/eventoService";


const ModalAdd = () => {
    const [evento, setEvento] = useState<EventoType>({} as EventoType);
    const { id } = useParams();
    const { isLoading, data } = useQuery<EventoType>({ queryKey: ['evento', id], queryFn: () => getEvento(id) });
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