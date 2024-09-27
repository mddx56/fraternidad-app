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
const Turnos = lazy(() => import('../pages/protected/turnos'))
const RealizarCobro = lazy(() => import('../pages/protected/cobros'))
const SelectFrater = lazy(() => import('../pages/protected/cobros/select-frater'))
const CobroMensualidad = lazy(() => import('../pages/protected/cobros/cobro-mensualidad'))
const CobroExtraordinaria = lazy(() => import('../pages/protected/cobros/cobro-extraordinaria'))
const printerMensualidad = lazy(() => import('../pages/protected/cobros/printer-mensualidad'))

const routes = [
    {
        path: '/',
        component: Dashboard,
    },
    {
        path: '/events',
        component: Evento,
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
        path: '/turnos',
        component: Turnos,
    },
    {
        path: '/elegirfrater',
        component: SelectFrater,
    },
    {
        path: '/mesualidad',
        component: CobroMensualidad,
    },
    
    {
        path: '/prm', 
        component: printerMensualidad,
    },
    {
        path: '/extraord',
        component: CobroExtraordinaria,
    },
    {
        path: '/profile',
        component: ProfileSettings,
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
        path: '/useradmin',
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
