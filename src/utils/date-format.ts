import { getDay, parseISO } from 'date-fns';
import { format } from 'date-fns/format';
import { es } from 'date-fns/locale/es';
import { parse } from 'date-fns/parse';

export function formattedDate(fecha: string): string {
    const newFormatDate = parseISO(fecha); 
    const formatoDeseado = "dd MMMM yyyy";
    const formattedDate = format(newFormatDate, formatoDeseado, { locale: es });
    return formattedDate;
}

export function formattedTime(hora: string | null): string {
    if (hora === null) return "";
    const horaa = parse(hora, 'HH:mm:ss', new Date());
    const formatoDeseado = "HH:mm";
    const horaFormateada = format(horaa, formatoDeseado);
    return horaFormateada;
}

export function formattedMonth(mes: number): string {
    const newFormatDate = new Date(0, mes, 0);
    const formatoDeseado = "MMMM";
    const formattedDate = format(newFormatDate, formatoDeseado, { locale: es });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase();;
}

export function esFinDeSemana(datestr: string): boolean {
    const dates = parseISO(datestr); 
    const day = getDay(dates);
    return day === 0 || day === 6;
}