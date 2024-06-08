import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Evento = lazy(() => import('../pages/protected/events/Evento'))
const EventoAdd = lazy(() => import('../pages/protected/events/EventoAdd'))
const Pago = lazy(() => import('../pages/protected/Pago'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'));
const Fraternidad = lazy(() => import('../pages/protected/Fraternidad'));
const PasswordChanged = lazy(() => import('../pages/protected/PasswordChanged'));
const Page404 = lazy(() => import('../pages/protected/404'))
// Tesorero pages
const UserAdmin = lazy(() => import('../pages/protected/admin/UserAdmin'))
const UserAdminAdd = lazy(() => import('../pages/protected/admin/UserAdminAdd'))
const SelectPago = lazy(() => import('../pages/protected/adminpago/SelectPago'))
const Medios = lazy(() => import('../pages/protected/medios'))

const routes = [
    {
        path: '/', // the url
        component: Dashboard, // view rendered
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
        path: '/medios', // the url
        component: Medios, // view rendered
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
        path: '/useradmin', // the url
        component: UserAdmin,
    },
    {
        path: '/useraddadmin',
        component: UserAdminAdd,
    },
    {
        path: '/elegircobro',
        component: SelectPago,
    },
]

export default routes
