import { api } from './api';
import { MediaImageInput, MediaImageType, MediaVideoInput, MediaVideoType } from '../types/medios-type';


export const getAllMediaImages = async () => {
    const response = await api.get<MediaImageType[]>(`frater/mediaimages/`);
    return response.data;
};

export const getMediaImage = async (id: string) => {
    const response = await api.get<MediaImageType>(`frater/mediaimages/${id}`);
    return response.data;
};


export const createMediaImage = async (formData: MediaImageInput) => {
    const response = await api.post<MediaImageType>(`frater/mediaimages/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updateMediaImage = async (id: number, formData: MediaImageInput) => {
    const response = await api.patch<MediaImageType>(`frater/mediaimages/${id}/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};

export const deleteMediaImage = async (id: number) => {
    const response = await api.delete<MediaImageType>(`frater/mediaimages/${id}/`);
    return response;
};

//--------video----------

export const getAllMediaVideos = async () => {
    const response = await api.get<MediaVideoType[]>(`frater/mediavideos/`);
    return response.data;
};

export const getMediaVideo = async (id: string) => {
    const response = await api.get<MediaVideoType>(`frater/mediavideos/${id}/`);
    return response.data;
};


export const createMediaVideo = async (formData: MediaVideoInput) => {
    const response = await api.post<MediaVideoType>(`frater/mediavideos/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updateMediaVideo = async (id: number, formData: MediaVideoInput) => {
    const response = await api.patch<MediaVideoType>(`frater/mediavideos/${id}/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const deleteMediaVideo = async (id: number) => {
    const response = await api.delete<MediaVideoType>(`frater/mediavideos/${id}/`);
    return response.data;
};
