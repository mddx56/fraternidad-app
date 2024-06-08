import { useEffect, useState } from 'react'
import TitleCard from '../common/components/Cards/TitleCard'
import { UserProfile } from '../../types/UserType';
import { getUserInfo } from '../../utils/localStorage';


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
    const [profileUser, setProfileUser] = useState<UserProfile | null>(null);
    const [editForm, setEditForm] = useState<boolean>(false);
    console.log(profileUser);
    const changeEdit = () => {
        setEditForm(!editForm);
    }

    useEffect(() => {
        setProfileUser(getUserInfo());
        setEditForm(false);
    }, []);

    return (
        <>
            <TitleCard title="Perfil" topMargin="mt-2" TopSideButtons={<TopSideButtons onClickBtn={changeEdit} />}>
                {profileUser ?
                    (<div>
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
                                <input className='input  input-bordered w-full' id="name" disabled={editForm ? false : true} defaultValue={profileUser.name} />
                            </div>
                        </div>
                        <div className="divider" ></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <label htmlFor="user_id">Correo Electronico</label>
                                <input className='input input-bordered w-full' id="user_id" disabled={true} defaultValue={profileUser.email} />
                            </div>
                            <input name="role" disabled={true} defaultValue={profileUser.role} />
                            <input name="exp" disabled={editForm ? false : true} defaultValue={profileUser.exp} />
                            <input name="active" disabled={editForm ? false : true} type='checkbox' defaultChecked={profileUser.active} />
                        </div></div>)
                    : ("...🥱")}
                <div className="mt-16"><button className="btn btn-primary float-right" >Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings;