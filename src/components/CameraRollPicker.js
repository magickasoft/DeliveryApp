import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';


class CameraRollPickers extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }
  render() {

    const { uid } = this.props.navigation.state.params;

    return (
          <CameraRollPicker
              maximum={1}
              callback={(images) => {
                  images[0] && this.props.getPhoto(Object.assign({ uid }, images[0])) || this.props.clearPhoto(uid)
              }
              } />
    );
  }
}

export default CameraRollPickers;
