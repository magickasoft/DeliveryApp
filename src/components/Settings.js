import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import {
    List,
    ListItem,
    Button,
    Badge,
    Text as Texts,
} from 'react-native-elements';
import {
    Kohana,
    Fumi
} from 'react-native-textinput-effects';
import Switch from './MaterialSwitch/index';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import I18n from '../i18n/index'
import { validateEmail } from '../utils/common';

class Settings extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress () {
      this.props.navigation.goBack();
  }
  validateEmailField () {
      validateEmail(this.props.settings.practiceEmail) && this.props.setValidateEmail(true) || this.props.setValidateEmail(false);
      return false;
  }
  render() {
    return (
      <ScrollView>
        <List>
            <Fumi
                label={I18n.t('PRAXIS_NAME')}
                iconClass={FontAwesomeIcon}
                iconName={'user'}
                iconColor={'#00897b'}
                onChangeText={(val) => {
                    this.props.setPracticeName(val);
                }}
                value={this.props.settings.practiceName}
            />
            <Fumi
                label={I18n.t('PRAXIS_ORT')}
                iconClass={FontAwesomeIcon}
                iconName={'map-marker'}
                iconColor={'#00897b'}
                onChangeText={(val) => {
                    this.props.setPracticeLocation(val);
                }}
                value={this.props.settings.practiceLocation}
            />
            <Fumi
                label={I18n.t('PRAXIS_EMAIL')}
                iconClass={FontAwesomeIcon}
                iconName={'envelope-o'}
                iconColor={'#00897b'}
                onChangeText={(val) => {
                    this.props.setPracticeEmail(val);
                    this.validateEmailField();
                }}
                value={this.props.settings.practiceEmail}
            />
        </List>
          {
              !this.props.settings.validatedEmail && this.props.settings.practiceEmail?
                  <Badge containerStyle={{ backgroundColor: '#e53935', marginTop: 15, marginLeft: 15, marginRight: 15}}>
                      <Text style={{color: 'white'}}>{this.props.settings.practiceEmail} is not valid :(</Text>
                  </Badge>
                  :
                  null
          }
          {
              this.props.settings.validatedEmail && this.props.settings.practiceEmail?
                  <Badge containerStyle={{ backgroundColor: '#00e676', marginTop: 15, marginLeft: 15, marginRight: 15}}>
                      <Text style={{color: '#000'}}>{this.props.settings.practiceEmail} is valid :)</Text>
                  </Badge>
                  :
                  null
          }
          <List>
              <View style={styles.containerPanelTop_inner}>
                  <View style={styles.containerPanelTop_innerDetail}>
                      <Text
                          numberOfLines={1}
                          style={styles.panelTop_LabelTitle}>{I18n.t('PRAXIS_SEND_EMAIL')}</Text>
                      {/*<Text*/}
                      {/*numberOfLines={1}*/}
                      {/*style={styles.panelTop_LabelSubTitle}>{`some subtitle`}</Text>*/}
                  </View>
                  <View style={styles.switch}>
                      <Switch
                          inactiveButtonColor={'#FAFAFA'}
                          inactiveButtonPressedColor={'#CCCCCC'}
                          activeButtonColor={'#00897b'}
                          activeButtonPressedColor={'#26a69a'}
                          activeBackgroundColor={'rgba(128,203,196,1)'}
                          inactiveBackgroundColor={'rgba(255,255,255,.5)'}
                          active={this.props.settings.getImagesByEmail}
                          onChangeState={(bool)=>{
                              this.props.setGetImagesByEmail(bool);
                          }}
                      />
                  </View>
              </View>
              <View style={styles.containerPanelTop_inner}>
                  <View style={styles.containerPanelTop_innerDetail}>
                      <Text
                          numberOfLines={1}
                          style={styles.panelTop_LabelTitle}>{I18n.t('PRAXIS_SAVE_IMAGES')}</Text>
                      {/*<Text*/}
                      {/*numberOfLines={1}*/}
                      {/*style={styles.panelTop_LabelSubTitle}>{`some subtitle`}</Text>*/}
                  </View>
                  <View style={styles.switch}>
                      <Switch
                          inactiveButtonColor={'#FAFAFA'}
                          inactiveButtonPressedColor={'#CCCCCC'}
                          activeButtonColor={'#00897b'}
                          activeButtonPressedColor={'#26a69a'}
                          activeBackgroundColor={'rgba(128,203,196,1)'}
                          inactiveBackgroundColor={'rgba(255,255,255,.5)'}
                          active={this.props.settings.saveImagesOnDevice}
                          onChangeState={(bool)=>{
                              this.props.setSaveImagesOnDevice(bool);
                          }}
                      />
                  </View>
              </View>
          </List>
          <View style={styles.viewBotton}>
              <Button
                  onPress={this.onButtonPress}
                  backgroundColor={'#397af8'}
                  raised
                  iconRight
                  icon={{name: 'check'}}
                  title={I18n.t('SAVE')} />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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

export default Settings;
