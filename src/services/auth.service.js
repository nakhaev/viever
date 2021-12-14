import axios from 'axios';
import qs from 'qs';

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


export async function authorization(data) {
    const {location, history} = data;
    let user = null;
    if(location && location.search && location.search !== '') {
        let params = qs.parse(location.search, { ignoreQueryPrefix: true });
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
    }
    return user;
}

