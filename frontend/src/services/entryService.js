import http from './httpService';
import {apiUrl} from '../config.json';

const apiEndPoint = apiUrl + '/contact_form/entries';

export function addEntry(entry) {
    return http.post(apiEndPoint, entry);
}

export function getEntries() {

    return http.get(apiEndPoint);
}