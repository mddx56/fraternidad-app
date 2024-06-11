import { MensualidadType, MensualidadInput, ExtraordinariaType } from '../types/cobros-type';
import { api } from './api';

export const getAllMensualidades = async () => {
    const response = await api.get<MensualidadType[]>(`agenda/mensualidads/`);
    return response.data;
};

export const getAllExtraords = async () => {
    const response = await api.get<ExtraordinariaType[]>(`agenda/extraordinarias/`);
    return response.data;
};

export const getPago = async (id: string) => {
    const response = await api.get<MensualidadType>(`agenda/mensualidads/${id}`);
    return response.data;
};

export const createPago = async (formData: MensualidadInput) => {
    const response = await api.post<MensualidadType>(`agenda/mensualidads/`, formData);
    return response.data;
};

export const updatePago = async ({
    id,
    formData,
}: {
    id: number;
    formData: FormData;
}) => {
    const response = await api.put<MensualidadType>(`agenda/mensualidads/${id}`, formData);
    return response.data;
};

export const deletePago = async (id: number) => {
    const response = await api.delete<MensualidadType>(`agenda/mensualidads/${id}`);
    return response.data;
};
