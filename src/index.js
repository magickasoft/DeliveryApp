'use strict';

import React, { Component } from 'react';
import {
    NetInfo,
} from 'react-native';
import {
    Provider
} from 'react-redux';

import App from './app';

import store from  './config/storeConfig';

import * as netinfoActions  from './actions/netinfo';


class wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    _handleConnectionInfoChange = (connectionInfo) => {
        store.dispatch(netinfoActions.setNetInfoStatus(connectionInfo));
    };
    componentWillUnmount() {

        NetInfo.removeEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }
    componentDidMount() {

        NetInfo.addEventListener(
            'change',
            this._handleConnectionInfoChange
        );
    }
    render() {

        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default wrapper;