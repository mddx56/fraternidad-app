import { Eye, Trash } from "lucide-react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import SuspenseContent from "../../containers/SuspenseContent";
import { getAllUsers } from "../../services/user-service";
import { UserAdminType } from "../../types/user-type";
import { QUERY_KEY, ROLE } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";

interface PropsSideButton {
    onClickBtn: () => void;
}

const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {
    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { onClickBtn() }}>Agregar</button>
        </div>
    )
}

function UserAdmin() {

    const navigate = useNavigate();
    const { isLoading, isError, data, error } = useQuery<UserAdminType[], Error>([QUERY_KEY.USERS], getAllUsers);

    if (isLoading) {
        return <SuspenseContent />;
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const onClickAdd = () => {
        navigate("/app/useraddadmin");
    }

    return (
        <TitleCard title="Usuarios" topMargin="mt-2" TopSideButtons={<TopSideButtons onClickBtn={onClickAdd} />}>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className="bg-base-200">
                            <th className="w-1/12">Ci</th>
                            <th className="w-2/12">Nombre Completo</th>
                            <th className="w-1/12">Rol</th>
                            <th className="w-1/12">Estado</th>
                            <th className="w-1/12"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, k) => {
                                return (
                                    <tr key={k}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="font-bold">{user.username}</div>
                                            </div>
                                        </td>
                                        <td>{user.full_name}</td>
                                        <td>{user.role === ROLE.FRATERNO ? <span className="badge badge-secondary font-semibolds">{user.role}</span> : <span className="badge badge-info font-semibold">{user.role}</span>}</td>
                                        <td>{user.suspend ? <span className="badge badge-error font-semibold">Suspendido</span> : <span className="badge badge-primary font-semibold">Activo</span>}</td>
                                        <td>
                                            <div className="flex justify-center space-x-1">
                                                <Link to={`/user/${user.id}`} className="btn btn-ghost btn-xs" onClick={() => { }}><Eye className="w-5" /></Link>
                                                <Link to="/app/" className="btn btn-ghost btn-xs" onClick={() => { }}><Trash className="w-5" /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>

    );
}
export default UserAdmin;