import {
    GET_PHOTO,
    CLEAR_PHOTO,
    SET_NAME_PATIENT,
    SET_COMMENT_PATIENT,
    CLEAR_ALL_PHOTOS,
} from '../constants/ActionTypes'

const initialState ={
    photos: [],
    namePatient: '',
    comment: ''
};

export function photopiker(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {

        case SET_COMMENT_PATIENT: {
            return {
                ...state,
                comment: payload.comment
            };
        }
        case SET_NAME_PATIENT: {
            return {
                ...state,
                namePatient: payload.name
            };
        }
        case GET_PHOTO: {
            const currentPhotos = state.photos.filter(photo => (photo.uid !== payload.uid));
            return {
                ...state,
                photos: [
                    ...currentPhotos,
                    { ...payload, uid: payload.uid }
                ]
            };
        }
        case CLEAR_PHOTO: {

            return {
                ...state,
                photos: state.photos.filter(photo => (photo.uid !== payload.uid))
            };
        }
        case CLEAR_ALL_PHOTOS: {

            return {
                ...state,
                photos: []
            };
        }
        default: {
            return state;
        }
    }
}
