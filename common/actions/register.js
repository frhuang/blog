import request from 'axios';
import { REGISTER } from '../constants';

function handleRegister(params) {
    return {
        type: REGISTER,
        promise: request.post("/reg",params)
    }
}

export function register(data) {
    return (dispatch, getState) => {
        return dispatch(handleRegister(data));
    };
}
