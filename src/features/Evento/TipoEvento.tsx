import { TipoEventoType } from "../../types/EventoType";
import { getTipoEvento } from "../../services/eventoService";
import { useQuery } from "@tanstack/react-query";

type Props = {
    Id: number;
}

function TipoEvento({ Id }: Props) {
    const { isLoading, data } = useQuery<TipoEventoType>({ queryKey: ['tipoEvento', Id], queryFn: () => getTipoEvento(Id) });
    if (isLoading) {
        return <><div className="badge badge-primary badge-md" /></>
    }

    return (
        <>
            <div className="flex items-center">
                <div className="badge badge-primary"> <span>{data.nombre}</span>  </div>
            </div>

        </>
    );
}
export default TipoEvento;