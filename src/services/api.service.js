import axios from 'axios';
import moment from 'moment-timezone';
// import qs from 'qs';

import config from '../config';

const date = new Date();
const timeZone = moment.tz.guess();

// create base configuration
const client = axios.create({
    baseURL: config.serviceUrl,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'timezoneoffset': date.getTimezoneOffset()/60,
        'timezone': timeZone
    }
});

export async function getEventData(eventToken) {
    const path = '/flask/viewer'+ eventToken +'/data';
    const response = await client.get(path);
    return response.data;
}
