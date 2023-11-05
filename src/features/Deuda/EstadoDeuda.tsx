/*import { EstadoDeudaType } from "../../types/PagosType";
import { getEstadoDeuda } from "../../services/deudaService";
import { useQuery } from "@tanstack/react-query";

type Props = {
    Id: number;
}

function EstadoDeuda({ Id }: Props) {
    const { isLoading, data } = useQuery<EstadoDeudaType>({ queryKey: ['deuda', Id], queryFn: () => getEstadoDeuda(Id) });
    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <>
            <div className="flex items-center">
                <div className="font-bold badge badge-info">{data.nombre}</div>
            </div>

        </>
    );
}
export default EstadoDeuda;*/