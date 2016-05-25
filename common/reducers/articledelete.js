import {
    ARTICLE_DELETE_REQUEST,
    ARTICLE_DELETE_SUCCESS,
    ARTICLE_DELETE_FAILURE
} from '../constants';

const initialState = {
    success: false
}

export default function articleDelete(state = initialState, action={}) {
    switch (action.type) {
        case ARTICLE_DELETE_REQUEST:
            return Object.assign({}, state, {
                success: false
            });
        case ARTICLE_DELETE_SUCCESS:
            return Object.assign({}, state, action.req.data);
        case ARTICLE_DELETE_FAILURE:
            return Object.assign({}, state, {
                success: false
            });
        default :
            return state;
    }
}
