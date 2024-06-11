import axios from 'axios';
import { useAuthStore } from '../stores/auth-store';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
    const newConfig = { ...config };
    const token = useAuthStore.getState().token;
    if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
        newConfig.headers['Content-Type'] = 'application/json';
    }
    return newConfig;
});
