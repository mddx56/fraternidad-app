import Avvvatars from 'avvvatars-react';
import { Bell, Menu, Moon, Sun, UserCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { useAppSelector } from '../stores/hook';
import { headerSelector } from '../features/common/headerSlice';
import { UserProfile } from '../types/UserType';
import { clearTokens, getUserInfo } from '../utils/localStorage';


function Header() {

    const [profileUser, setProfileUser] = useState<UserProfile | null>(getUserInfo());
    const header = useAppSelector(headerSelector);
    //const header = "frater";
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        setProfileUser(getUserInfo());
    }, []);

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: night)').matches) {
                setCurrentTheme("night")
            } else {
                setCurrentTheme("light")
            }
        }
    }, [currentTheme]);

    function logoutUser() {
        clearTokens();

        window.location.href = '/#/login'
    }

    return (
        <>
            <div className="navbar flex justify-between bg-base-100 z-20 shadow-md ">
                <div >
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                        <Menu className="h-5 inline-block w-5" /></label>
                    <h1 className="text-2xl font-semibold ml-2">{header.pageTitle}</h1>
                </div>

                <div className="order-last">
                    <label className="swap swap-rotate">
                        <input type="checkbox" />
                        <Sun data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "forest" ? "swap-on" : "swap-off")} />
                        <Moon data-set-theme="forest" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "light" ? "swap-on" : "swap-off")} />
                    </label>

                    <button className="btn btn-ghost ml-4  btn-circle" onClick={() => { }}>
                        <div className="indicator">
                            <Bell className="h-6 w-6" />
                            {/*noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null*/}
                        </div>
                    </button>

                    <div className="dropdown dropdown-end ml-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {
                                    profileUser ?
                                        <Avvvatars value={profileUser.name} size={34} />
                                        : <UserCircle className="h-8 w-8" />
                                }
                            </div>
                            {/*                            <div className="w-9 rounded-full">
                                {
                                    profileUser ?
                                        <Avvvatars value={profileUser.name} size={36} />
                                        : <UserCircleIcon className="h-9 w-9" />
                                }
                            </div>*/}
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="justify-between">
                                <Link to='/app/profile'>
                                    Perfil Usuario
                                </Link>
                            </li>
                            <li className="justify-between">
                                <Link to='/app/password'>
                                    Cambiar Contraseña
                                </Link>
                            </li>

                            <div className="divider mt-0 mb-0"></div>

                            <li className="justify-between">
                                <Link to='/app/fraternidad'>
                                    Fraternidad
                                </Link>
                            </li>

                            <div className="divider mt-0 mb-0"></div>

                            <li><a onClick={logoutUser}>Salir</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header