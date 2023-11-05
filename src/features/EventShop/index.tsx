import { useQuery } from "@tanstack/react-query";
import { LoadingInfinity } from "../common/components/LoadingInfinity";
import { AlertWarnig } from "../../components/AlertWarning";
import { TipoEventoType } from "../../types/EventoType";
import { getAllTipoEvento } from "../../services/eventoService";
import EventCard from "../../components/EventCard";
import { esFinDeSemana } from "../../utils/dateFormat";
import { QUERY_KEY } from "../../utils/constant";

function EventShop() {

    const { isLoading, isError, data, error } = useQuery<TipoEventoType[], Error>([QUERY_KEY.TIPOEVENTO], getAllTipoEvento)

    if (isLoading) {
        return <LoadingInfinity />
    }else{
        console.log(data); 
    }

    if (isError) {
        return <AlertWarnig titleAlert={error.message} />
    }

    return (
        <>
            <div className="bg-base-200">
                <div className="container mx-auto px-4">
                   {/* <h2 className="text-3xl font-bold mb-8">Tipo de evento</h2>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 gap-8">*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            !isLoading && data ?
                                data.map((te: TipoEventoType) =>
                                    <EventCard key={te.id} title={te.nombre} description={te.descripcion} price={esFinDeSemana() ? te.costo_finsemana : te.costo_entresemana} />)
                                : ""
                        }
                    </div>
                </div>
            </div>
        </>
    );

}

export default EventShop;