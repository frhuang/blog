import request from 'axios';
import { PUBLISH } from '../constants';


export function doPublish(params) {
    console.log(params);
    return {
        type: PUBLISH,
        promise: request.post("http://localhost:8000/publish", params)
    }
}