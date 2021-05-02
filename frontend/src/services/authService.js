import http from './httpService';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndPoint = apiUrl + "/auth";
const tokenKey = 'token'


export async function login(data) {
   const result =  await http.post(apiEndPoint, data);
   const jwt = result.data.token;
   localStorage.setItem(tokenKey, jwt);
            
}

export function logout() {

        localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {

    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
         
   } catch (e) {
      return null;   
   }
}

export function getJwt() {
   localStorage.getItem(tokenKey);
}

export default {
   getCurrentUser,
   getJwt,
   login,
   logout
}