import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SuspenseContent from "../../containers/SuspenseContent";
import { getDeudasExtraords } from "../../services/cobro-service";
import { useCobroStore } from "../../stores/cobro-store";
import { DeudaExtraordType } from "../../types/cobros-type";
import { QUERY_KEY } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";
import ExtraordCard from "./components/ExtraordCard";

export function CobroExtraord() {

    const [idFrater, setIdFrater] = useState<string>(useCobroStore.getState().cifraterno ?? "");
    const { isLoading, isError, data, error } = useQuery<DeudaExtraordType[], Error>({
        queryKey: [QUERY_KEY.DEUDAEXTRAORD, idFrater],
        queryFn: () => getDeudasExtraords(idFrater),
    })

    useEffect(() => {
        const ci = useCobroStore.getState().cifraterno;
        setIdFrater(ci)
    }, [])

    if (isLoading) return <SuspenseContent />
    if (isError) return <span>{error.message}</span>;
    return (
        <>
            <TitleCard title="Extraordinaria">
                {data?.map((extraord, k) => {
                    return (
                        <div key={k}>
                           <ExtraordCard key={k} {...extraord}/>
                        </div>
                    )
                })
                }
            </TitleCard>
        </>
    );
}