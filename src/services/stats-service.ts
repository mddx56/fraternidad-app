import { CountFraterType } from '../types/stats-type';
import { api } from './api';

export const getCountFraters = async () => {
    try {
        const { data } = await api.get<CountFraterType>(`auth/fraternos-count/`);
        return data;
    } catch (error) {
        throw 'Error'
    }
};