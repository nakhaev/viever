import axios from 'axios';
import qs from 'qs';
import {storage} from "./storage.service";

import config from '../config';

// create base configuration
const client = axios.create({
    baseURL: config.idpUrl,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

async function getSelf(token) {
    client.defaults.headers.common['Authorization'] = token;
    return client.get('/auth/self')
}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export async function authorization(history) {
    const {location} = history;
    let user = null;
    const storedUser = storage.get('user');
    let params = {};

    if(storedUser) {
        params.token = storedUser.token;
    } else if(location && location.search && location.search !== '') {
        params = qs.parse(location.search, { ignoreQueryPrefix: true });
    } else {
        return user;
    }

    if(params.token) {

        const response = await getSelf(params.token);
        user = response.data;
        user.token = params.token;
        const search = { ...params};
        delete search.token;
        if(history) {
            history.push({
                pathname: location.pathname,
                search: qs.stringify(search)
            })
        }
    }

    return user;
}

