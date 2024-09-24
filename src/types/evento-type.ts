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
    hora_inicio: null | string;
    hora_fin: null | string;
    descripcion: string;
    es_entresemana: boolean;
    estado_reserva: string;
    created_date: string;
    tipo_evento: number;
    user: string;
}

export type EstadosReservaType = {
    id: number;
    nombre: string;
    precio: number;
}

export type TipoEventoType = {
    id: number;
    nombre: string;
    descripcion: string;
    costo_entresemana: number;
    costo_finsemana: number;
}

export type EventoInput = Omit<EventoType, "id">;