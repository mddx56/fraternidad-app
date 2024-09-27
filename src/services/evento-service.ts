import { EstadosReservaType, EventoInput, EventoType, PagoReservaType, ReservaType, TipoEventoType } from '../types/evento-type';
import { api } from './api';

export const getAllEventos = async () => {
    const response = await api.get<EventoType[]>(`agenda/agendas/`);
    return response.data;
};

export const getEvento = async (id: string) => {
    const response = await api.get<EventoType>(`agenda/agendas/${id}`);
    return response.data;
};

export const getTipoEvento = async (id: number) => {
    const response = await api.get<TipoEventoType>(`agenda/tiposevent/${id}`);
    return response.data;
};

export const getAllTipoEvento = async () => {
    const response = await api.get<TipoEventoType[]>(`agenda/tiposevent/`);
    return response.data;
};

export const getAllEstadoReserva = async () => {
    const response = await api.get<EstadosReservaType[]>(`agenda/estadosreserva/`);
    return response.data;
};

export const createEvento = async (formData: EventoInput) => {
    const response = await api.post<EventoType>(`agenda/agendas/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const createReserva = async (formData: ReservaType) => {
    try {
        const response = await api.post(`agenda/reserva/`, formData,
            
        );
        return response;
    } catch (error) {
        console.log(JSON.stringify(error))
    }
};

export const createPagoReserva = async (formData: PagoReservaType) => {
    const response = await api.post<EventoType>(`agenda/pagar-reserva/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};


export const updateEvento = async (id: number, formData: EventoInput) => {
    const response = await api.patch<EventoType>(`agenda/agendas/${id}`, formData);
    return response.data;
};

export const deleteEvento = async (id: number) => {
    const response = await api.delete<EventoType>(`agenda/agendas/${id}`);
    return response.data;
};


