import { FraternidadType } from "../types/FraternidadType";
import { api } from './api';

/*
export const getAllMediaImages = async () => {
    const response = await api.get<MediaImageType[]>(`frater/mediaimages/`);
    return response.data;
};

export const getAllMediaVideo = async () => {
    const response = await api.get<MediaVideoType[]>(`frater/mediavideos/`);
    return response.data;
};*/

export const getFraternidad = async () => {
    const response = await api.get<FraternidadType>(`/frater/fraternidad/1/`);
    return response.data;
};