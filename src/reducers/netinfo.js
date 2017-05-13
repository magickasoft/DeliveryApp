import {
    NETINFO_SET_STATUS,
} from '../constants/ActionTypes'

const initialState = {
    type: ''
};

export function netinfo(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case NETINFO_SET_STATUS: {
            return {...state, type: payload};
        }
    }
    return state
}
