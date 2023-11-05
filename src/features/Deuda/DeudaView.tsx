import TitleCard from "../common/components/Cards/TitleCard";
import { useEffect, useState } from "react"
import { UserProfile } from "../../types/UserType";
import { getUserInfo } from "../../utils/localStorage";
//import { LoadingInfinity } from "../common/components/LoadingInfinity";


function DeudaView() {

    const [profileUser, setProfileUser] = useState<UserProfile>(getUserInfo());

    const [idUser, setIdUser] = useState<string>("");

    useEffect(() => {
        setProfileUser(getUserInfo());
        setIdUser(profileUser.user_id);
    }, []);

    useEffect(() => {
        console.log(idUser);
        if (idUser) {
            /*getDeudaTotal(idUser)
                .then(data => {
                    //setDeuda(data[0]);
                    console.log(data);
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                })*/
        }
        console.log(idUser);
        console.log(idUser);

    }, [idUser]);

    return (
        <>
            <TitleCard title="Informacion" topMargin="mt-2">
                <div className='h-full w-full pb-6 bg-base-100'>
                    <div className="stats shadow">
                        {/*deuda ? <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-8 h-8 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                            </div>
                            <div className="stat-title">Deuda Total</div>
                            <div className="stat-value">{deuda.deuda_total} Bs.</div>
                            <div className="stat-desc">Estado deuda :{deuda.estado_deuda}</div>
                        </div> :
                            <LoadingInfinity />
    */}
                    </div>
                </div>
            </TitleCard>
        </>
    );
}
export default DeudaView;