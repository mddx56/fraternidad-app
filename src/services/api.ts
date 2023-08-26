import axios from 'axios';

//const BASE_URL = 'http://localhost:8000/api/';
const BASE_URL = 'http://52.201.248.25:8000/api/';

export const api = axios.create({
    baseURL: BASE_URL,
});

//api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//api.defaults.headers.common['Content-Type'] = 'application/json';
