import { useQuery } from "react-query";
import SuspenseContent from "../../containers/SuspenseContent";
import { getAllMensualidades } from "../../services/cobro-service";
import { MensualidadType } from "../../types/cobros-type";
import { QUERY_KEY } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";

export function CobroMensualidad() {
    const { isLoading, isError, data, error } = useQuery<MensualidadType[], Error>({
        queryKey: [QUERY_KEY.MENSUALIDAD],
        queryFn: () => getAllMensualidades(),
    })

    if (isLoading) return <SuspenseContent />
    if (isError) return error;

    return (
        <>
            <TitleCard title="Mensualidad">
                <div>
                    {data?.map((mensualida) => {
                        return (
                            <div>
                                <p>{mensualida.mes}</p>
                                <p>{mensualida.fecha}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </TitleCard>
        </>
    );
}