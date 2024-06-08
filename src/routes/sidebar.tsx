import { BookImage, Calendar, HandCoins, HomeIcon, PersonStanding, User2, Wallet } from "lucide-react";

export interface NavLink {
    path: string;
    name: string;
    icon?: JSX.Element;
}

export interface SideLink extends NavLink {
    sub?: NavLink[];
}

const iconClasses = `h-6 w-6`;

export const routes: SideLink[] = [
    {
        path: '/app/',
        name: 'Inicio',
        icon: <HomeIcon />,
    },
    {
        path: '/app/events',
        name: 'Admistrar Eventos',
        icon: <Calendar className={iconClasses} />,
    },
    {
        path: '/app/useradmin',
        name: 'Administrar Usuarios',
        icon: <User2 className={iconClasses} />,
    },
    {
        path: '/app/elegircobro',
        icon: <HandCoins className={iconClasses} />,
        name: 'Cobros en General',
    },
    {
        path: '/app/usersadmin',
        icon: <PersonStanding className={iconClasses} />,
        name: 'Administrar Turnos',
    },
    {
        path: '/app/usersaadsamin',
        icon: <Wallet className={iconClasses} />,
        name: 'Administrar Pagos',
    },
    {
        path: '/app/medios',
        icon: <BookImage className={iconClasses} />,
        name: 'Administrar Multimedios',
    },
];


