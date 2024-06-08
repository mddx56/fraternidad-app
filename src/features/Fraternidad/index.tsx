import { useQuery } from "react-query";
import { AlertWarnig } from "../../components/AlertWarning";
import { getFraternidad } from "../../services/frater-service";
import { FraternidadType } from "../../types/FraternidadType";
import TitleCard from "../common/components/Cards/TitleCard";
import { LoadingInfinity } from "../common/components/LoadingInfinity";

function Fraternidad() {

    const { isLoading, isError, data, error } = useQuery<FraternidadType, Error>(['farternidad'], getFraternidad);

    if (isLoading) {
        return <LoadingInfinity />
    }

    if (isError) {
        return <AlertWarnig titleAlert={error.message} />
    }

    return (
        <>
            <TitleCard title="Informacion de fraternidad." topMargin="mt-2">
                {data && !isLoading ?
                    <div className="border-t px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="label text-sm font-medium">
                                    Nombre
                                </dt>
                                <dd className="mt-1 text-sm label-text sm:mt-0 sm:col-span-2">
                                    {data.nombre}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="label text-sm font-medium">
                                    Direccion
                                </dt>
                                <dd className="mt-1 text-smlabel-text sm:mt-0 sm:col-span-2">
                                    {data.direccion}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="label text-sm font-medium">
                                    Mensualidad
                                </dt>
                                <dd className="mt-1 text-sm label-text sm:mt-0 sm:col-span-2">
                                    {data.mensualidad} Bs
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="label text-sm font-medium">
                                    Monto de deuda para suspencion
                                </dt>
                                <dd className="mt-1 text-sm label-text sm:mt-0 sm:col-span-2">
                                    {data.monto_suspendido} Bs
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="label text-sm font-medium ">
                                    Dia de turno
                                </dt>
                                <dd className="mt-1 text-sm label-text sm:mt-0 sm:col-span-2">
                                    {data.turno_semanal}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    : "...😵"}
            </TitleCard>
        </>
    );

}

export default Fraternidad;