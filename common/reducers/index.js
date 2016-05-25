import { combineReducers } from 'redux';
import layout from './layout';
import articleLists from './articleLists';
import articleDelete from './articleDelete';
import articleDetail from './articleDetail';
import articleEdit from './articleEdit';

import login from './login';
import register from './register';
import publish from './publish';
import fileUpload from './fileUpload';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    layout,
    login,
    register,
    publish,
    fileUpload,
    articleLists,
    articleDelete,
    articleDetail,
    articleEdit,
    routing: routerReducer
});

export default rootReducer