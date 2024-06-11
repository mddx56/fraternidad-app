import { useQuery } from "react-query";
import { AlertWarnig } from "../../components/AlertWarning";
import { getFraternidad } from "../../services/frater-service";
import { FraternidadType } from "../../types/fraternidad-type";
import TitleCard from "../common/components/Cards/TitleCard";
import SuspenseContent from "../../containers/SuspenseContent";

function Fraternidad() {
    const { isLoading, isError, data, error } = useQuery<FraternidadType, Error>(['farternidad'], getFraternidad);

    if (isLoading) {
        return <SuspenseContent />
    }

    if (isError) {
        return <AlertWarnig titleAlert={error.message} />
    }

    return (
        <>
            <TitleCard title="Informacion de fraternidad." topMargin="mt-2">
                {data && !isLoading ?
                    <div className="overflow-x-auto w-3/4 h-96 px-16">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nombre</td>
                                    <td>{data.nombre}</td>
                                </tr>
                                <tr>
                                    <td>Descripcion</td>
                                    <td>{data.descripcion}</td>
                                </tr>
                                <tr>
                                    <td>Cuenta Banco</td>
                                    <td>{data.banco}</td>
                                </tr>
                                <tr>
                                    <td>Mensualidad</td>
                                    <td>{data.mensualidad}</td>
                                </tr>
                                <tr>
                                    <td>Monto de reserva</td>
                                    <td>{data.monto_no_reserva}</td>
                                </tr>
                                <tr>
                                    <td>Monto de suspencion</td>
                                    <td>{data.monto_suspendido}</td>
                                </tr>
                                <tr>
                                    <td>Turno</td>
                                    <td>{data.turno_semanal}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : "...😵"}
            </TitleCard>
        </>
    );

}

export default Fraternidad;