export type EventoState = {
    loading: boolean;
    eventos: Array<EventoType>;
    error: string | undefined;
}

export type EventoCalendarType = {
    title: string;
    start: string;
    end: string;
    descripcion: string;
    estado_reserva: number;
}

export type EventoType = {
    id: number;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    descripcion: string;
    created_date: string;
    tipo_evento: number;
    estado_reserva: number;
    user: number;
}

export type TipoEventoType = {
    id: number;
    nombre: string;
    descripcion: string;
}

export type EventoInput = Omit<EventoType, "id">;