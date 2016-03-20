import request from 'axios';
import {
    PUBLISH,
    ARTICLE_EDIT,
    ARTICLE_LIST_GET,
    ARTICLE_DELETE,
    ARTICLE_GET_ID } from '../constants';

export function doLoad(params) {
    return {
        type: ARTICLE_LIST_GET,
        promise: request.post("/articleLists",params)
    }
}

export function doDelete(params){
    return {
        type: ARTICLE_DELETE,
        promise: request.post("/articleDelete", params)
    }
}

export function getArticleById(params) {
    return {
        type: ARTICLE_GET_ID,
        promise: request.post("/articleDetail", params)
    }
}

export function doPublish(params) {
    return {
        type: PUBLISH,
        promise: request.post("/publish", params)
    }
}

export function doEdit(params) {
    return {
        type: ARTICLE_EDIT,
        promise: request.post("/articleEdit", params)
    }
}