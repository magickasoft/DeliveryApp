'use strict';
import { combineReducers } from 'redux'
import { autoRehydrated } from './persist'
import { netinfo } from './netinfo'
import { photopiker } from './photoPicker'
import { settings } from './settings'
// import { nav } from './nav'

const rootReducer = combineReducers({
    autoRehydrated,
    netinfo,
    settings,
    photopiker,
    //nav,
});

export default rootReducer;
