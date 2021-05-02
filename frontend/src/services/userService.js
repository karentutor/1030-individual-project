import http from './httpService';
import {apiUrl} from '../config.json';

export function addUser(user) {
    return http.post(apiUrl + '/users', user);
}