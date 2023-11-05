/** Icons are imported separatly to reduce build time */
/*import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`
*/
//import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import { ReactNode } from "react";
//import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

//import KeyIcon from '@heroicons/react/24/outline/KeyIcon'

//const iconClasses = `h-6 w-6`
//const submenuIconClasses = `h-5 w-5`

type NavItem = {
    path: string;
    icon?: ReactNode;
    name: string;
};

export const routes: NavItem[] = [
    {
        path: "/app/",
        //icon: <KeyIcon className={iconClasses} />,
        name: "Inicio",
    },
    {
        path: '/app/calendar', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Ver Calendario', // name that appear in Sidebar
    },
    {
        path: '/app/elegirevento', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Ver Info. de Eventos',
    },
    {
        path: '/app/deudafraterno', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Ver Deudas',
    },
]

export const routesTS: NavItem[] = [
    {
        path: '/app/userfsdfadmin', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Inicio',
    },
    {
        path: '/app/events', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Eventos',
    },
    {
        path: '/app/useradmin', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Administrar Usuarios',
    },
    {
        path: '/app/elegirpago', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Cobros en General',
    },
    {
        path: '/app/usersadmin', // url
        //icon: <InboxArrowDownIcon />,
        name: 'Administrar Turnos',
    },
    {
        path: '/app/usersaadsamin', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Administrar Pagos Extraordinarios',
    },
    {
        path: '/app/userdssaadsamin', // url
        //icon: {<InboxArrowDownIcon className={ iconClasses } />},
        name: 'Administrar Multimedios',
    },
]

//export default routes


