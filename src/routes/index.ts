// All components mapping with path for internal routes

import { lazy } from 'react'
import { ROLE } from '../utils/constant'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Evento = lazy(() => import('../pages/protected/Evento'))
const EventoAdd = lazy(() => import('../pages/protected/EventoAdd'))
const Deuda = lazy(() => import('../pages/protected/Deuda'))
const Pago = lazy(() => import('../pages/protected/Pago'))
const EventShop = lazy(() => import('../pages/protected/EventShop'))
const DeudaView = lazy(() => import('../pages/protected/DeudaView'))


const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'));
const Fraternidad = lazy(() => import('../pages/protected/Fraternidad'));
const PasswordChanged = lazy(() => import('../pages/protected/PasswordChanged'));

const Page404 = lazy(() => import('../pages/protected/404'))

// Tesorero pages
const UserAdmin = lazy(() => import('../pages/protected/admin/UserAdmin'))
const UserAdminAdd = lazy(() => import('../pages/protected/admin/UserAdminAdd'))

const SelectPago = lazy(()=> import('../pages/protected/adminpago/SelectPago'))

const routes = [
    {
        path: '/', // the url
        component: Dashboard, // view rendered
        role: "DSA",
    },
    {
        path: '/events', // the url
        component: Evento, // view rendered
    },
    {
        path: '/eventos/:id', // the url
        component: Evento, // view rendered
    },
    {
        path: '/addevento', // the url
        component: EventoAdd, // view rendered
    },
    {
        path: '/deudas', // the url
        component: Deuda, // view rendered
    },
    {
        path: '/pagos', // the url
        component: Pago, // view rendered
    },
    {
        path: '/calendar', // the url
        component: Welcome, // view rendered
    },

    {
        path: '/profile', // the url
        component: ProfileSettings, // view rendered
    },
    {
        path: '/404',
        component: Page404,
    },
    {
        path: '/fraternidad',
        component: Fraternidad,
    },
    {
        path: '/password',
        component: PasswordChanged,
    },
    {
        path: '/elegirevento',
        component: EventShop,
    },
    {
        path: '/deudafraterno',
        component: DeudaView,
    },
    {
        path: '/useradmin', // the url
        component: UserAdmin,
        role: ROLE.TESORERO,
    },
    {
        path: '/useraddadmin',
        component: UserAdminAdd,
        role: ROLE.TESORERO,
    },
    {
        path: '/elegirpago',
        component: SelectPago,
        role: ROLE.TESORERO,
    },
]

export default routes
