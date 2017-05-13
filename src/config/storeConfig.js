import {
    AsyncStorage,
} from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import * as photoActions from '../actions/photoPicker'

let middlewareApplied;
const logger = createLogger();

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
process.env.NODE_ENV === 'production'
    ? middlewareApplied = applyMiddleware(thunk, /*logger*/)
    : middlewareApplied = applyMiddleware(thunk, logger);


const store = createStore(rootReducer, {},
    compose(
        autoRehydrate(),
        middlewareApplied,
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ));
persistStore(store, {
    storage: AsyncStorage,
    //debounce: 50,
    whitelist: ['autoRehydrated', 'photopiker', 'settings'],
    //blacklist: [ 'navigationState' ],
}, () => {
    !store.getState().settings.saveImagesOnDevice && store.dispatch(photoActions.clearPhotos())
}).purge([]);

export default store;