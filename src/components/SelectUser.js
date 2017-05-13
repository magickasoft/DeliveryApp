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
import {
    Button,
    Icon,
    SocialIcon,
} from 'react-native-elements';
import I18n from '../i18n/index'
import imagesApp from '../constants/Images';

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2.3 : width / 2.3 ;

class SelectUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress () {
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapView}>
          <TouchableOpacity
              style={styles.viewImage}
          >
              <Image
                  style={{width: scale * 1.19078, height: scale}}
                  source={imagesApp.applogo}
              />
          </TouchableOpacity>
          <View style={styles.containerBottomImage}>
              <Image
                  style={{width: width, height: 40}}
                  source={imagesApp.bottomArrows}
              />
          </View>
          <View style={styles.containerButton}>
              <View style={styles.viewBotton}>
                  <Button
                      onPress={() => {
                          navigation.navigate('Register', {accountType: 'sender'});
                      }}
                      backgroundColor={'#FFFFFF'}
                      color={'#000'}
                      raised
                      large
                      borderRadius={100}
                      title={`${I18n.t('BE_A')} ${I18n.t('SENDER')}`} />
              </View>
              <View style={styles.viewBotton}>
                  <Button
                      onPress={() => {
                          navigation.navigate('Register', {accountType: 'driver'});
                      }}
                      backgroundColor={'#FFFFFF'}
                      color={'#000'}
                      raised
                      large
                      borderRadius={100}
                      title={`${I18n.t('BE_A')} ${I18n.t('DRIVER')}`} />
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapView: {
        backgroundColor:'#22356B',
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        // alignItems: 'center'
    },
    containerBottomImage: {
        position: 'absolute',
        bottom: 0,
    },
    containerButton:{
        padding: 20,
        position: 'absolute',
        width,
        bottom: scale/4,
    },
    viewImage: {
      margin: 15,
        paddingBottom: scale/1.01,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center'
    },
    viewBotton:{
      marginBottom: 15,
    },
    scrollView: {
    },
});

export default SelectUser;
