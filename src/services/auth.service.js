import axios from 'axios';

import config from '../config';

// create base configuration
const client = axios.create({
    baseURL: config.idpUrl,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function getSelf(token) {
    client.defaults.headers.common['Authorization'] = token;
    const response = await  client.get('/auth/self');
    return response.data;
}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

