import {
    SET_NAME_PRACTICE,
    SET_LOCATION_PRACTICE,
    SET_EMAIL_PRACTICE,
    GET_IMAGES_BY_EMAIL,
    SAVE_IMAGES_ON_DEVICE,
    SET_VALIDATE_EMAIL,
} from '../constants/ActionTypes'

const initialState ={
    practiceName: '',
    practiceLocation: '',
    practiceEmail: '',
    validatedEmail: false,
    getImagesByEmail: false,
    saveImagesOnDevice: false
};

export function settings(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case SET_VALIDATE_EMAIL: {
            return {
                ...state,
                validatedEmail: payload.bool
            };
        }
        case GET_IMAGES_BY_EMAIL: {
            return {
                ...state,
                getImagesByEmail: payload.bool
            };
        }
        case SAVE_IMAGES_ON_DEVICE: {
            return {
                ...state,
                saveImagesOnDevice: payload.bool
            };
        }
        case SET_NAME_PRACTICE: {
            return {
                ...state,
                practiceName: payload.name
            };
        }
        case SET_LOCATION_PRACTICE: {
            return {
                ...state,
                practiceLocation: payload.location
            };
        }
        case SET_EMAIL_PRACTICE: {
            return {
                ...state,
                practiceEmail: payload.email
            };
        }
        default: {
            return state;
        }
    }
}
