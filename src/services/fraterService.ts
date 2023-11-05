import { api } from './api';
import { FraternidadType, MediaImageType, MediaVideoType } from "../types/FraternidadType";


export const getAllMediaImages = async () => {
    const response = await api.get<MediaImageType[]>(`frater/mediaimages/`);
    return response.data;
};

export const getAllMediaVideo = async () => {
    const response = await api.get<MediaVideoType[]>(`frater/mediavideos/`);
    return response.data;
};

export const getFraternidad = async () => {
    const response = await api.get<FraternidadType>(`/frater/fraternidad/1/`);
    return response.data;
};