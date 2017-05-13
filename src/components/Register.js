import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
} from 'react-native';
import {
    Button,
    Icon,
    SocialIcon,
    FormLabel,
    FormInput,
    FormValidationMessage,
} from 'react-native-elements';
import I18n from '../i18n/index'
import imagesApp from '../constants/Images';
import Hoshi from '../components/TextInput/Hoshi';

import { toCapitalise } from '../utils/common';

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2.1 : width / 2.1 ;

class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        userName:'',
        email: '',
        password: '',
        phone: '',
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress () {
  }
  render() {
    const { navigation } = this.props;
    return (
        <View style={{ flex:1, backgroundColor:'#fff', }}>
            <View style={styles.containerBottomImage}>
                <Image
                    style={{width: width, height: 40}}
                    source={imagesApp.bottomArrows}
                />
            </View>
            <ScrollView style={styles.wrapView}>
                <View style={styles.containerTextInput}>
                    <Hoshi
                        label={I18n.t('USER_NAME')}
                        onChangeText={(userName) => {
                            this.setState({ userName });
                        }}
                        value={this.state.userName}
                        borderColor={'#44B049'}
                        style={{backgroundColor: 'transparent',}}
                    />
                    <FormValidationMessage style={{backgroundColor: 'transparent',}}>{I18n.t('ERROR_MESSAGE')}</FormValidationMessage>
                    <Hoshi
                        label={I18n.t('EMAIL')}
                        onChangeText={(email) => {
                            this.setState({ email });
                        }}
                        value={this.state.email}
                        borderColor={'#44B049'}
                        style={{backgroundColor: 'transparent',}}
                    />
                    <FormValidationMessage style={{backgroundColor: 'transparent',}}>{I18n.t('ERROR_MESSAGE')}</FormValidationMessage>
                    <Hoshi
                        label={I18n.t('PASSWORD')}
                        secureTextEntry={true}
                        onChangeText={(password) => {
                            this.setState({ password });
                        }}
                        value={this.state.password}
                        borderColor={'#44B049'}
                        style={{backgroundColor: 'transparent',}}
                    />
                    <FormValidationMessage style={{backgroundColor: 'transparent',}}>{I18n.t('ERROR_MESSAGE')}</FormValidationMessage>
                    <Hoshi
                        label={I18n.t('PHONE_NUMBER')}
                        onChangeText={(phone) => {
                            this.setState({ phone });
                        }}
                        value={this.state.phone}
                        borderColor={'#44B049'}
                        style={{backgroundColor: 'transparent',}}
                    />
                    <FormValidationMessage style={{backgroundColor: 'transparent',}}>{I18n.t('ERROR_MESSAGE')}</FormValidationMessage>
                        <Text style={{backgroundColor: 'transparent', marginTop: 15, color: '#939393', fontSize: 16, textAlign: 'center',}}>{I18n.t('TEXT_VERIFICATION_SMS')}</Text>
                </View>
                <View style={{paddingTop: 20,paddingLeft: 20, paddingRight: 20, paddingBottom: 0,}}>
                    <View style={styles.viewBotton}>
                        <Button
                            // onPress={() => {
                            //     navigation.navigate('Login', {});
                            // }}
                            backgroundColor={'#44B049'}
                            raised
                            large
                            borderRadius={100}
                            title={I18n.t('REGISTR')} />
                    </View>
                    <View style={styles.viewBotton}>
                        <Button
                            // onPress={() => {
                            //     navigation.navigate('Register', {});
                            // }}
                            backgroundColor={'#355EB2'}
                            color={'#fff'}
                            raised
                            large
                            icon={{name: 'facebook', type: 'font-awesome'}}
                            borderRadius={100}
                            title={`${I18n.t('REGISTR')} ${I18n.t('WITH')} ${toCapitalise(I18n.t('FACEBOOK'))}`} />
                    </View>
                </View>
                <View style={{paddingTop: 0,paddingLeft: 20, paddingRight: 20, paddingBottom: 20,}}>

                    <Text style={{backgroundColor: 'transparent', marginTop: 15, color: '#939393', fontSize: 16, textAlign: 'center',}}>{I18n.t('TEXT_IGREE_COND')}</Text>
                    <View style={styles.buttonContent}>
                        <TouchableOpacity onPress={() => {

                        }}
                        >
                            <Text style={{color: '#109CDA', fontSize: 16}}>{`${I18n.t('PRIVACY_POLICY')} `}</Text>
                        </TouchableOpacity>
                        <Text style={{backgroundColor: 'transparent', color: '#939393', fontSize: 16,}}>{I18n.t('AND')}</Text>
                        <TouchableOpacity onPress={() => {

                        }}
                        >
                            <Text style={{color: '#109CDA', fontSize: 16}}>{` ${I18n.t('TERMS')} `}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 40,}}>
                </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonContent: {
        //width: width - 40,
        marginLeft: 20,
        marginTop: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTextInput: {
        //borderTopColor: '#8F8F8F',
        backgroundColor: 'transparent',
        width: width - 40,
        marginLeft: 20,
        marginTop: 15,
    },
    descriptionView: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 0,
        marginBottom: 15,
    },
    lineView: {
        borderTopColor: '#8F8F8F',
        borderTopWidth: 1,
        flex: 0.5,
    },
    actionText: {
        //flex: 0.4,
        marginRight: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#7F7F7F'
    },
    wrapView:{
        flex: 1,
        flexDirection: 'column',
        //justifyContent:'flex-start',
        // alignItems: 'center'
    },
    containerBottomImage: {
        position: 'absolute',
        bottom: 0,
        opacity: 0.5,
    },
    containerButton:{
        padding: 20,
    },
    viewImage: {
      margin: 15,
        paddingBottom: scale/2,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center'
    },
    viewBotton:{
      marginBottom: 15,
    },
    scrollView: {
        // backgroundColor:'#fff',
    },
});

export default Register;
