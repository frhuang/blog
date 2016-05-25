import request from 'axios';
import { UPLOAD } from '../constants';


export function doUpload(params) {
    console.log(params);
    return {
        type: UPLOAD,
        promise: request.post("/fileUpload", params)
    }
}