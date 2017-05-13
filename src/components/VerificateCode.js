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
    Platform,
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

class VerificateCode extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
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
                <View style={{paddingTop: 40,paddingLeft: 15, paddingRight: 15, paddingBottom: 20,}}>
                    <Text style={{backgroundColor: 'transparent', color: '#939393', fontSize: 16, textAlign: 'center',}}>{I18n.t('TEXT_SEND_VERIFICATION')}</Text>
                    <Text style={{backgroundColor: 'transparent', color: '#939393', fontSize: 16, textAlign: 'center',}}>{I18n.t('PLEASE_INTER')}</Text>
                </View>
                <TextInput
                    ref={'textInput'}
                    name={'code' }
                    type={'TextInput'}
                    underlineColorAndroid={'transparent'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={(val) => {
                        if (!this.state.enterCode) return;
                        if (val.length === 4) {}

                    }}
                    placeholder={'_ _ _ _'}
                    keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                    style={[ styles.textInput, {
                        height: 50,
                        textAlign: 'center',
                        fontSize: 40,
                       // fontWeight: 'bold',
                    } ]}
                    returnKeyType='go'
                    autoFocus
                    placeholderTextColor={'#000000'}
                    selectionColor={'#000000'}
                    maxLength={4}
                    onSubmitEditing={() => {}} />

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
                            title={I18n.t('VERIFY')} />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    textInput: {
        padding: 0,
        margin: 0,
        flex: 1,
        fontSize: 20,
        color: '#000000'
    },
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

export default VerificateCode;
