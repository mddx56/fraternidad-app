import es from 'date-fns/locale/es';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

export function formattedDate(fecha: string): string {
    const newFormatDate = new Date(fecha);
    const formatoDeseado = "dd MMMM yyyy";
    const formattedDate = format(newFormatDate, formatoDeseado, { locale: es });
    return formattedDate;
}

export function formattedTime(hora: string): string {
    const horaa = parse(hora, 'HH:mm:ss', new Date());
    const formatoDeseado = "HH:mm";
    const horaFormateada = format(horaa, formatoDeseado);
    return horaFormateada;
}

export function formattedMonth(mes: number): string {
    const newFormatDate = new Date(0, mes, 0);
    const formatoDeseado = "MMMM";
    const formattedDate = format(newFormatDate, formatoDeseado, { locale: es });
    return formattedDate;
}