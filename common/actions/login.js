import request from 'axios';
import { LOGIN } from '../constants';


export function doLogin(params) {
    console.log(params);
    return {
        type: LOGIN,
        promise: request.post("/login", params)
    }
}