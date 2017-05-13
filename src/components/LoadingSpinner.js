import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ActivityIndicator,

} from 'react-native';

const style = StyleSheet.create({
    container: {
        position:'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class LoadingSpinner extends Component {

    static propTypes = {
        visible: React.PropTypes.bool.isRequired,
    };

    render() {
        const { visible } = this.props;
        return (
        visible ? <View style={style.container}>
                <ActivityIndicator size="large" color="#fff" />
            </View> : null
        )
    }
}