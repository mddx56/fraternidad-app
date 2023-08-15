import { DeudaType } from "../../types/DeudaType";
import { TrashIcon } from "@heroicons/react/24/outline";
import TitleCard from "../common/components/Cards/TitleCard";
import { getAllDeudas } from "../../services/deudaService";
import { useQuery } from "@tanstack/react-query";
import EstadoDeuda from "./EstadoDeuda";
import { formattedMonth } from "../../utils/dateFormat";



const TopSideButtons = () => {



    //    const openAddNewLeadModal = () => {
    //dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    //  }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { }}>Add New</button>
        </div>
    )
}

function Evento() {
    const { isLoading, isError, data, error } = useQuery<DeudaType[], Error>(['deudas'], getAllDeudas)

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    return (
        <>

            <TitleCard title="Deudas" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="bg-base-200 borde">
                                <th>User</th>
                                <th>Mes</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((deuda, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="font-bold">{deuda.user}</div>
                                                </div>
                                            </td>
                                            <td>{formattedMonth(deuda.mes)}</td>
                                            <td><EstadoDeuda Id={deuda.estado_reserva} /></td>
                                            <td><button className="btn btn-square btn-ghost" onClick={() => { }}><TrashIcon className="w-5" /></button></td>
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
export default Evento;