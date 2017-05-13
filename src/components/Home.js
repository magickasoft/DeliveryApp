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
} from 'react-native-elements';
import I18n from '../i18n/index'
import imagesApp from '../constants/Images';

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2 : width / 2 ;

class Home extends Component {
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
      <ScrollView>
          <TouchableOpacity
              style={styles.viewImage}
              onPress={() => {
                  navigation.navigate('TakePhoto', {});
              }}
          >
              <Image
                  style={{width: scale, height: scale}}
                  source={imagesApp.profilphoto}
              />
              <View style={styles.iconView}>
                  <Icon
                      name={'camera'}
                      type={'font-awesome'}
                      color={'rgba(255,255,255,1)'}
                  />
              </View>
          </TouchableOpacity>
          <View style={styles.viewBotton}>
              <Button
                  onPress={() => {
                      navigation.navigate('LaborDetail', {});
                  }}
                  backgroundColor={'#397af8'}
                  raised
                  iconRight
                  icon={{name: 'info-circle', type: 'font-awesome'}}
                  title={I18n.t('LABOR')} />
          </View>
          <View style={styles.viewBotton}>
              <Button
                  onPress={() => {
                      navigation.navigate('Feed', {});
                  }}
                  backgroundColor={'#397af8'}
                  raised
                  iconRight
                  icon={{name: 'user', type: 'font-awesome'}}
                  title={I18n.t('CONTACT_PERSON')} />
          </View>
          <View style={styles.viewBotton}>
              <Button
                  onPress={() => {
                      navigation.navigate('Settings', {});
                  }}
                  backgroundColor={'#397af8'}
                  raised
                  iconRight
                  icon={{name: 'cog', type: 'font-awesome'}}
                  title={I18n.t('SETTINGS')} />
          </View>
          <View style={styles.viewBotton}>
              <Button
                  onPress={() => {
                      navigation.navigate('LaborNews', {});
                  }}
                  backgroundColor={'#397af8'}
                  raised
                  iconRight
                  icon={{name: 'facebook', type: 'font-awesome'}}
                  title='News' />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    iconView: {
        width: scale/3,
        height: scale/3,
        position: 'absolute',
        bottom: -(scale/3/3)+(scale/3/3),
        backgroundColor:'blue',
        borderRadius:scale/6,
        borderWidth: 6,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    viewImage: {
      marginTop: 15,
      paddingBottom: (scale/3/3),
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center'
    },
    viewBotton:{
      marginTop: 15,
    },
    switch: {
        marginLeft: 10,
        marginRight: 5,
    },
    scrollView: {
    },
    containerPanelTop_inner: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    panelTop_innerUserImage: {
        height:70,
        width:70,
        borderRadius: 35,
        marginRight: 10,
    },
    containerPanelTop_innerDetail: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent:'center',
    },
    panelTop_LabelTitle:{
        color: '#000000',
        fontSize: 18,
    },
    panelTop_LabelSubTitle:{
        color: '#000000',
        fontSize: 14,
        opacity: 0.8,
    },
});

export default Home;
