import {
    GET_PHOTO,
    CLEAR_PHOTO,
    SET_NAME_PATIENT,
    SET_COMMENT_PATIENT,
    CLEAR_ALL_PHOTOS,
} from '../constants/ActionTypes'

export function setCommentPatient(comment) {
    return {
        type: SET_COMMENT_PATIENT,
        payload: { comment }
    }
}

export function setNamePatient(name) {
    return {
        type: SET_NAME_PATIENT,
        payload: { name }
    }
}

export function getPhoto(data) {
    return {
        type: GET_PHOTO,
        payload: data
    }
}

export function clearPhoto(uid) {
    return {
        type: CLEAR_PHOTO,
        payload: { uid }
    }
}

export function clearPhotos() {
    return {
        type: CLEAR_ALL_PHOTOS
    }
}