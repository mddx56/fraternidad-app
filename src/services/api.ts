import axios from 'axios';
import { getAccessToken } from '../utils/localStorage';

const BASE_URL = 'http://127.0.0.1:8000/api/';
//const BASE_URL = 'http://52.201.248.25:8000/api/';
//const BASE_URL = 'https://fraternidad.onrender.com/api/';

export const api = axios.create({
    baseURL: BASE_URL,
});


// Request interceptor for API calls
api.interceptors.request.use(async (config) => {
    const newConfig = { headers: config.headers || {}, ...config };

    const jwt = getAccessToken();
    if (jwt) {
        newConfig.headers.Authorization = `Bearer ${jwt}`;
        newConfig.headers['Content-Type'] = 'application/json';
    }
    console.log(newConfig);
    return newConfig;
});

/*    async config => {
        config: {
            'Authorization': `Bearer ${getAccessToken()}`,
                'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });*/

//api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//api.defaults.headers.common['Content-Type'] = 'application/json';
