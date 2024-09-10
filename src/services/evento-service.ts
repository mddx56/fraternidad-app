import { api } from './api';
import { EventoType, EventoInput, TipoEventoType, EstadosReservaType } from '../types/evento-type';

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

export const updateEvento = async (id: number, formData: EventoInput) => {
    const response = await api.patch<EventoType>(`agenda/agendas/${id}`, formData);
    return response.data;
};

export const deleteEvento = async (id: number) => {
    const response = await api.delete<EventoType>(`agenda/agendas/${id}`);
    return response.data;
};


