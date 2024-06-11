import { Bell, Menu, Moon, Sun, User2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { headerSelector } from '../features/common/headerSlice';
import { useAuthStore } from '../stores/auth-store';
import { useAppSelector } from '../stores/dispatch';
import type { AuthCheckType as User } from '../types/user-type';
import { Avatar } from './Avatar';


function Header() {
    const user = useAuthStore.getState().user;
    const logOutUser = useAuthStore(state => state.logoutUser);
    const [profileUser, setProfileUser] = useState<User | undefined>(undefined);
    const header = useAppSelector(headerSelector);
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        setProfileUser(user);
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
        logOutUser();
        return <Navigate to='/login' />
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
                                        <Avatar name={profileUser.full_name} />
                                        : <User2 className='w-8 h-8' />
                                }
                            </div>

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