import axios from 'axios';
import { getAccessToken } from '../utils/localStorage';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
    const newConfig = { ...config };

    const jwt = getAccessToken();
    if (jwt) {
        newConfig.headers.Authorization = `Bearer ${jwt}`;
        newConfig.headers['Content-Type'] = 'application/json';
    }
    console.log(newConfig);
    return newConfig;
});
