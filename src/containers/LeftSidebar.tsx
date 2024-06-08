import { Link, NavLink, useLocation } from 'react-router-dom';
import { routes } from '../routes/sidebar';
//import SidebarSubmenu from './SidebarSubmenu';
import { Menu, PartyPopper } from 'lucide-react';
import { Logo } from '../components/Logo';
//import { useDispatch } from 'react-redux';
//import { motion } from 'framer-motion'


function LeftSidebar() {
    const location = useLocation();

    //const dispatch = useDispatch()

    /*const close = (e) => {
        console.log(e);
        document.getElementById('left-sidebar-drawer').click()
    }*/

    return (
        <div className="drawer-side">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu  pt-2 w-60 h-full bg-base-100 text-base-content">
                <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                    <Menu className="h-5 inline-block w-5" />
                </button>

                <li className="mb-2 font-semibold text-xl">
                    <Link to={'/app'}> <span className='w-12'><Logo /></span>  Flojonazos</Link>
                </li>
                {
                    routes.map((route, k) => {
                        return (
                            <li key={k}>
                                {
                                    (<NavLink
                                        end
                                        to={route.path}
                                        className={({ isActive }) => `${isActive ? 'font-semibold  bg-base-200' : 'font-normal'}`} >

                                        {route.icon} {route.name}
                                        {
                                            location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                        }
                                    </NavLink>)
                                }

                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default LeftSidebar