import axios from 'axios';
import { useAuthStore } from '../stores/auth-store';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    },
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

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const res = error.response;
        if (res.status == 401) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
