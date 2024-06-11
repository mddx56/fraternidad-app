import { PagoInput, PagoType } from '../types/cobros-type';
import { api } from './api';

export const getAllPagos = async () => {
    const response = await api.get<PagoType[]>(`agenda/pagos/`);
    return response.data;
};

export const getPago = async (id: string) => {
    const response = await api.get<PagoType>(`agenda/pagos/${id}`);
    return response.data;
};

export const createPago = async (formData: PagoInput) => {
    const response = await api.post<PagoType>(`agenda/pagos/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updatePago = async ({
    id,
    formData,
}: {
    id: number;
    formData: FormData;
}) => {
    const response = await api.put<PagoType>(`agenda/pagos/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const deletePago = async (id: number) => {
    const response = await api.delete<PagoType>(`agenda/pagos/${id}`);
    return response.data;
};
