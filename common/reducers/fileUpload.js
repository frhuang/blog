import { UPLOAD_SUCCESS } from '../constants';
const initialState = {
    success: false
};

export default function fileUpload(state = initialState, action={}) {
    switch (action.type) {
        case UPLOAD_SUCCESS:
            return Object.assign({}, state, action.req);
        default :
            return state;
    }
}