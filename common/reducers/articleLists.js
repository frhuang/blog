import {
    ARTICLE_LIST_GET_REQUEST,
    ARTICLE_LIST_GET_SUCCESS,
    ARTICLE_LIST_GET_FAILURE
} from '../constants';

const initialState = {
    error: {},
    isFetching: false,
    success: false,
    articles: []
}

export default function articleLists(state = initialState, action={}) {
    switch (action.type) {
        case ARTICLE_LIST_GET_REQUEST:
            return Object.assign({}, state, {
               isFetching: true
            });
        case ARTICLE_LIST_GET_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                articles: action.req.data
            });
        case ARTICLE_LIST_GET_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default :
            return state;
    }
}
