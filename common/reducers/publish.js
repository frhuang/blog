import { PUBLISH_SUCCESS } from '../constants';
const initialState = {
    success: false
}

export default function publish(state = initialState, action={}) {
    switch (action.type) {
        case PUBLISH_SUCCESS:
            return Object.assign({}, state, action.req);
        default :
            return state;
    }
}