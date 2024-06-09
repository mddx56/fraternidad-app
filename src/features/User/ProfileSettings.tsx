import { useEffect, useState } from 'react'
import TitleCard from '../common/components/Cards/TitleCard'
import { AuthCheckType } from '../../types/UserType';
import { useAuthStore } from '../../stores/auth';


interface PropsSideButton {
    onClickBtn: () => void;
}

const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { onClickBtn() }}>Editar Perfil</button>        </div>
    )
}

function ProfileSettings() {
    const user = useAuthStore.getState().user;
    const [profileUser, setProfileUser] = useState<AuthCheckType | undefined>(undefined);
    const [editForm, setEditForm] = useState<boolean>(false);

    const changeEdit = () => {
        setEditForm(!editForm);
    }

    useEffect(() => {
        setProfileUser(user);
        console.log(user)
        setEditForm(false);
    }, []);

    return (
        <>
            <TitleCard title="Perfil" topMargin="mt-2" TopSideButtons={<TopSideButtons onClickBtn={changeEdit} />}>
                {profileUser ?
                    (<div className='px-20'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <label htmlFor="user_id">ID Usuario</label>
                                <input className='input input-bordered w-full' id="user_id" disabled={true} defaultValue={profileUser.user_id} />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="username">Nombre Usuario</label>
                                <input className='input input-bordered w-full' id="username" disabled={editForm ? false : true} defaultValue={profileUser.username} />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="name">Nombre Completo</label>
                                <input className='input  input-bordered w-full' id="name" disabled={editForm ? false : true} defaultValue={profileUser.username} />
                            </div>
                        </div>
                        <div className="divider" ></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <label htmlFor="user_id">Correo Electronico</label>
                                <input className='input input-bordered w-full' id="user_id" disabled={true} defaultValue={profileUser.email} />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="user_id">Rol</label>
                                <input className='input input-bordered' disabled={true} defaultValue={profileUser.role} />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="user_id">Exp</label>
                                <input className='input input-bordered' disabled={editForm ? false : true} defaultValue={profileUser.claims.exp} />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="user_id">Suspendido</label>
                                <input className='checkbox items-center' disabled={editForm ? false : true} type='checkbox' defaultChecked={profileUser.suspend} />
                            </div>
                        </div>
                    </div>)
                    : (
                        <div className='px-20'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                    )
                }
                <div className="mt-16"><button className="btn btn-primary float-right" >Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings;