// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Evento = lazy(() => import('../pages/protected/Evento'))
const Deuda = lazy(() => import('../pages/protected/Deuda'))
const Pago = lazy(() => import('../pages/protected/Pago'))

const Page404 = lazy(() => import('../pages/protected/404'))


const routes = [
    {
        path: '/', // the url
        component: Dashboard, // view rendered
    },
    {
        path: '/eventos', // the url
        component: Evento, // view rendered
    },
    {
        path: '/eventos/:id', // the url
        component: Evento, // view rendered
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
        path: '/welcome', // the url
        component: Welcome, // view rendered
    },
    {
        path: '/404', // the url
        component: Page404, // view rendered
    },
]

export default routes
