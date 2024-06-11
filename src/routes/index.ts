import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Evento = lazy(() => import('../pages/protected/events/Evento'))
const EventoAdd = lazy(() => import('../pages/protected/events/EventoAdd'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'));
const Fraternidad = lazy(() => import('../pages/protected/fraternidad'));
const PasswordChanged = lazy(() => import('../pages/protected/PasswordChanged'));
const Page404 = lazy(() => import('../pages/protected/404'))
const UserAdmin = lazy(() => import('../pages/protected/admin/UserAdmin'))
const UserAdminAdd = lazy(() => import('../pages/protected/admin/UserAdminAdd'))
const Medios = lazy(() => import('../pages/protected/medios'))
const RealizarCobro = lazy(() => import('../pages/protected/cobros'))
const SelectFrater = lazy(() => import('../pages/protected/cobros/select-frater'))
const CobroMensualidad = lazy(() => import('../pages/protected/cobros/cobro-mensualidad'))
const CobroExtraordinaria = lazy(() => import('../pages/protected/cobros/cobro-extraord'))

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
        path: '/eventos/:id',
        component: Evento,
    },
    {
        path: '/addevento',
        component: EventoAdd,
    },
    {
        path: '/medios',
        component: Medios,
    },
    {
        path: '/elegirfrater', // the url
        component: SelectFrater,
    },
    {
        path: '/mesualidad', // the url
        component: CobroMensualidad,
    },
    {
        path: '/extraord', // the url
        component: CobroExtraordinaria,
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
        path: '/useradd',
        component: UserAdminAdd,
    },
    {
        path: '/elegircobro',
        component: RealizarCobro,
    },
]

export default routes
