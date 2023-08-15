import { api } from './api';
import { EventoType, EventoInput, TipoEventoType } from '../types/EventoType';

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

export const createEvento = async (formData: EventoInput) => {
    const response = await api.post<EventoType>(`agenda/agendas/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updateEvento = async ({
    id,
    formData,
}: {
    id: number;
    formData: FormData;
}) => {
    const response = await api.put<EventoType>(`agenda/agendas/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const deleteEvento = async (id: number) => {
    const response = await api.delete<EventoType>(`agenda/agendas/${id}`);
    return response.data;
};


