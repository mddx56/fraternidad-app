import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import TitleCard from "../common/components/Cards/TitleCard";
import { getAllPagos } from "../../services/pagoService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { PagoType } from "../../types/PagoType";


const TopSideButtons = () => {

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { }}>Add New</button>
        </div>
    )
}

function Pago() {
    //const [pagos, setPagos] = useState<Array<PagoType>>([]);

    const { isLoading, isError, data, error } = useQuery<PagoType[], Error>(['pagos'], getAllPagos)

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return (
        <>

            <TitleCard title="Pagos" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="bg-base-200 borde">
                                <th>Fecha Pago</th>
                                <th>Monto Pagado</th>
                                <th>Deuda</th>
                                <th>Evento</th>
                                <th>User</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((pago, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <td>{pago.fecha_pago}</td>
                                                </div>
                                            </td>
                                            <td>{pago.monto_pagado}</td>
                                            <td>{pago.deuda}</td>
                                            <td>{pago.evento}</td>
                                            <td>{pago.user}</td>
                                            <td><Link to="/app/" className="btn btn-ghost btn-xs" onClick={() => { }}><EyeIcon className="w-5" /></Link></td>
                                            <td><Link to="/app/" className="btn btn-ghost btn-xs" onClick={() => { }}><TrashIcon className="w-5" /></Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    );
}
export default Pago;