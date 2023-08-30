import { api } from './api';
import { DeudaType, DeudaInput, EstadoDeudaType } from '../types/DeudaType';

export const getAllDeudas = async () => {
    const response = await api.get<DeudaType[]>(`agenda/deudas/`);
    return response.data;
};

export const getDeuda = async (id: number) => {
    const response = await api.get<DeudaType>(`agenda/deudas/${id}`);
    return response.data;
};

export const createDeuda = async (formData: DeudaInput) => {
    const response = await api.post<DeudaType>(`agenda/deudas/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updateDeuda = async ({
    id,
    formData,
}: {
    id: number;
    formData: FormData;
}) => {
    const response = await api.put<DeudaType>(`agenda/deudas/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const deleteDeuda = async (id: number) => {
    const response = await api.delete<DeudaType>(`agenda/deudas/${id}`);
    return response.data;
};

export const getEstadoDeuda = async (id: number) => {
    const response = await api.get<EstadoDeudaType>(`agenda/estadosdeuda/${id}`);
    return response.data;
};

export const getDeudaTotal = async (id: string) => {
    const url = `agenda/fraterno/${id}/deudas/`;
    console.log("url => ",url);
    const response = await api.get<DeudaType[]>(url);
    return response.data;
};