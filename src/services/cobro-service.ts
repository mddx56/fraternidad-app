import { DeudaExtraordType, DeudaMenType, ExtraordinariaType, MensualidadInput, MensualidadPagosInput, MensualidadType, PagoResponse } from '../types/cobros-type';
import { api } from './api';

export const getAllMensualidades = async () => {
    const response = await api.get<MensualidadType[]>(`agenda/mensualidads/`);
    return response.data;
};

export const getAllExtraords = async () => {
    const response = await api.get<ExtraordinariaType[]>(`agenda/extraordinarias/`);
    return response.data;
};

export const getDeudasExtraords = async (ci: string) => {
    const response = await api.get<DeudaExtraordType[]>(`agenda/deudas/e/${ci}`);
    return response.data;
};

export const getDeudasMensualids = async (ci: string) => {
    const response = await api.get<DeudaMenType>(`agenda/deudas/m/${ci}`);
    return response.data.deudas;
};

export const getPago = async (id: string) => {
    const response = await api.get<MensualidadType>(`agenda/mensualidads/${id}`);
    return response.data;
};

export const createPago = async (formData: MensualidadInput) => {
    const response = await api.post<MensualidadType>(`agenda/mensualidads/`, formData);
    return response.data;
};

export const payMensualidades = async (formData: MensualidadPagosInput) => {
    console.log(formData)
    const response = await api.post<PagoResponse>(`agenda/pagar-mensuals/`, formData);
    return response;
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
