import {
    NETINFO_SET_STATUS,
} from '../constants/ActionTypes'


export function setNetInfoStatus(data) {
    return {
        type: NETINFO_SET_STATUS,
        payload: data
    }
}
