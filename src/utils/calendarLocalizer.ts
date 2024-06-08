import { dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { es } from 'date-fns/locale/es';


const locales = {
    'es': es,
}

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

export const getMessages = () => {
    return {
        allDay: 'Todo el día',
        previous: 'Sig',
        next: 'Ant',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en la Agenda',
        showMore: (total: string) => `+ Ver más (${total})`
    }
};