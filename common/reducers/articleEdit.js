import {
    ARTICLE_EDIT_REQUEST,
    ARTICLE_EDIT_SUCCESS,
    ARTICLE_EDIT_FAILURE
} from '../constants';

const initialState = {
    editSuccess: false
};

export default function articleEdit(state = initialState, action={}) {
    switch (action.type) {
        case ARTICLE_EDIT_REQUEST:
            return Object.assign({}, state, {
                editSuccess: false
            });
        case ARTICLE_EDIT_SUCCESS:
            return Object.assign({}, state, {
                editSuccess: true
            });
        case ARTICLE_EDIT_FAILURE:
            return Object.assign({}, state, {
                editSuccess: false
            });
        default :
            return state;
    }
}
