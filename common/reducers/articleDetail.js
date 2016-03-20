import {
    ARTICLE_GET_ID_REQUEST,
    ARTICLE_GET_ID_SUCCESS,
    ARTICLE_GET_ID_FAILURE
} from '../constants';

const initialState = {
    error: {},
    isFetching: false,
    success: false,
    article: {}
}

export default function articleDetail(state = initialState, action={}) {
    switch (action.type) {
        case ARTICLE_GET_ID_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                success: false
            });
        case ARTICLE_GET_ID_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                success: true,
                article: action.req.data
            });
        case ARTICLE_GET_ID_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                success: false
            });
        default :
            return state;
    }
}
