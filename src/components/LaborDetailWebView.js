import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  StyleSheet,
  WebView,
} from 'react-native';
import {
    Tile,
    List,
    ListItem,
    Card,
} from 'react-native-elements';
import GiftedSpinner from 'react-native-gifted-spinner';
import Spinner from 'react-native-loading-spinner-overlay';

import { configData } from '../branding/index';

class UserDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        webViewLoaded: false,
    };
  }
  loadEnd =  () => {
    this.setState({ webViewLoaded: true });
  };
  render() {
    const { webViewLoaded } = this.state;
    return (
        <View style={{flex: 1}}>
            {!webViewLoaded && <Spinner visible={!this.state.webViewLoaded} /> }
            <WebView
                style={(webViewLoaded) ? styles.webView : styles.loading}
                source={{uri: configData.infoLabor.newsURL}}
                onLoadEnd={() => {
                    this.loadEnd();
                }}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    webView: {

    },
    loading: {
        width: 0,
        height: 0
    },
    scrollView: {
    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    },
});
export default UserDetail;
