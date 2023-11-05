 import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import TitleCard from "../common/components/Cards/TitleCard";
//import { getAllUsers } from "../../services/userService";
//import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { UserAdminType, UserType } from "../../types/UserType";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { useGetUsers } from "../../hooks/UseUser";
  

interface PropsSideButton {
    //removeFilter: () => void;
    //applyFilter?: () => void;
    applySearch: (value: string) => void;
    onClickBtn: () => void;
}

/*const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { onClickBtn() }}>Agregar</button>
        </div>
    )
}*/

const TopSideButtons = ({ applySearch, onClickBtn }: PropsSideButton) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    //const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

    /* const showFiltersAndApply = (params) => {
         applyFilter(params)
         setFilterParam(params)
     }*/

    const removeAppliedFilter = () => {
        //removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if (searchText == "") {
            removeAppliedFilter()
        } else {
            applySearch(searchText)
        }
    }, [searchText])

    return (
        <div className="inline-block float-right">
            <SearchBar placeholderText={"Buscar"} searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} />
            {filterParam != "" && <button onClick={() => removeAppliedFilter()} className="btn btn-xs mr-2 btn-active btn-ghost normal-case">{filterParam}<XMarkIcon className="w-4 ml-2" /></button>}
            {/*<div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2" />Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
                    {
                           locationFilters.map((l, k) => {
                            return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                </ul>



                }¿b 0000</div>*/}
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { onClickBtn() }}>Agregar</button>
        </div>
    )
}

function UserAdmin() {

    const [trans, setTrans] = useState(null)
    // Search according to name
    const applySearch = (value: string) => {
        const filteredTransactions = data && data.filter((t: UserAdminType) => { return t.username.toLowerCase().includes(value.toLowerCase()) || t.username.toLowerCase().includes(value.toLowerCase()) })
        setTrans(filteredTransactions)
    }


    const navigate = useNavigate();
    //const [eventos, setEventos] = useState<Array<EventoType>>([]);

    const { isLoading, isError, data, error } = useGetUsers();

    if (isLoading) {
        return <span>Cargando...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const onClickAdd = () => {
        console.log("/useraddadmin");
        navigate("/app/useraddadmin");
    }

    return (
        <>
            <TitleCard title="Usuarios" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} onClickBtn={onClickAdd} />}>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="bg-base-200">
                                <th className="w-1/12">Ci</th>
                                <th className="w-4/12">Nombre Completo</th>
                                <th className="w-1/12">Rol</th>
                                <th className="w-1/12">Estado</th>
                                <th className="w-1/12"></th>
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
                                            <td>{user.role}</td>
                                            <td>{user.suspend ? "Suspendido" : "Activo"}</td>
                                            <td><Link to={`/user/${user.id}`} className="btn btn-ghost btn-xs" onClick={() => { }}><EyeIcon className="w-5" /></Link></td>
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
export default UserAdmin;