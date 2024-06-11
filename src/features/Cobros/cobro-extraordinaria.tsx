import { useQuery } from "react-query";
import SuspenseContent from "../../containers/SuspenseContent";
import { getAllExtraords } from "../../services/cobro-service";
import { ExtraordinariaType } from "../../types/cobros-type";
import { QUERY_KEY } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";

export function CobroExtraord() {
    const { isLoading, isError, data, error } = useQuery<ExtraordinariaType[], Error>({
        queryKey: [QUERY_KEY.EXTRAORD],
        queryFn: () => getAllExtraords(),
    })

    if (isLoading) return <SuspenseContent />
    if (isError) return error;
    return (
        <>
            <TitleCard title="Extraordinaria">
                {data?.map((extraord) => {
                    return (
                        <div>
                            <p>{extraord.monto}</p>
                            <p>{extraord.concepto}</p>
                        </div>
                    )
                })
                }
            </TitleCard>
        </>
    );
}