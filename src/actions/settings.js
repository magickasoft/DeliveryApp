import {
    SET_NAME_PRACTICE,
    SET_LOCATION_PRACTICE,
    SET_EMAIL_PRACTICE,
    GET_IMAGES_BY_EMAIL,
    SAVE_IMAGES_ON_DEVICE,
    SET_VALIDATE_EMAIL,
} from '../constants/ActionTypes'

export function setValidateEmail(bool) {
    return {
        type: SET_VALIDATE_EMAIL,
        payload: { bool }
    }
}
export function setGetImagesByEmail(bool) {
    return {
        type: GET_IMAGES_BY_EMAIL,
        payload: { bool }
    }
}
export function setSaveImagesOnDevice(bool) {
    return {
        type: SAVE_IMAGES_ON_DEVICE,
        payload: { bool }
    }
}
export function setPracticeName(name) {
    return {
        type: SET_NAME_PRACTICE,
        payload: { name }
    }
}

export function setPracticeLocation(location) {
    return {
        type: SET_LOCATION_PRACTICE,
        payload: { location }
    }
}

export function setPracticeEmail(email) {
    return {
        type: SET_EMAIL_PRACTICE,
        payload: { email }
    }
}