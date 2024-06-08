import { useQuery } from "react-query";
import { getTipoEvento } from "../../services/evento-service";
import { TipoEventoType } from "../../types/EventoType";

type Props = {
    Id: number;
}

function TipoEvento({ Id }: Props) {
    const { isLoading, data, isError, error } = useQuery<TipoEventoType, Error>({ queryKey: ['tipoEvento', Id], queryFn: () => getTipoEvento(Id) });
    if (isLoading) {
        return <><div className="badge badge-primary badge-md px-5" /></>
    }

    if (isError) {
        return (<div className="badge badge-error badge-md" ><span>{error.message}</span></div>)
    }

    const longitudMaxima = 29;

    return (
        <>
            <div className="flex items-center">
                {data?.nombre.length <= longitudMaxima ?
                    (<div className="rounded-full px-2 bg-primary text-base-100 p-1  leading-none flex items-center "><span>{data.nombre}</span></div>)
                    :
                    (<div className="tooltip rounded-full px-2 bg-primary text-base-100 p-1 leading-none flex items-center " data-tip={data.nombre}><span> {data.nombre.slice(0, longitudMaxima) + '..'}</span></div>)
                }
            </div >
        </>
    );
}
export default TipoEvento;