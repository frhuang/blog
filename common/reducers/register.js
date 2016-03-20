import { REGISTER_SUCCESS } from '../constants';
const initialState = {
    bl:0,
    msg:"",
    error:false
};

export default function register(state = initialState, action={}) {
    console.log(action);
    switch (action.type) {
        case REGISTER_SUCCESS:
            return Object.assign({},state,action.req.data);
        default:
            return state;
    }
}