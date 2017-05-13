import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    ScrollView,
    StyleSheet,
    Dimensions,
    Alert,
    NativeModules,
    DeviceEventEmitter,
} from 'react-native';
import {
    Icon,
    List,
    ListItem
} from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import ProgressBar from './ProgressBar/index';
import { globalConfig } from '../config';
import { configData } from '../branding/index';
import I18n from '../i18n/index'

import RNFS from 'react-native-fs';
const { width, height } = Dimensions.get('window');

let RNUploader = NativeModules.RNUploader;

class SendInformation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        uploading: false,
        uploadProgress: 0,
        uploadTotal: 0,
        uploadWritten: 0,
        uploadStatus: undefined,
        cancelled: false,
        images: props.photopiker.photos,
    };
    this._uploadImages = this._uploadImages.bind(this);
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('RNUploaderProgress', (data) => {
        let bytesWritten = data.totalBytesWritten;
        let bytesTotal   = data.totalBytesExpectedToWrite;
        let progress     = data.progress;
        this.setState({uploadProgress: (progress / 100), uploadTotal: bytesTotal, uploadWritten: bytesWritten});
    });
      this._uploadImages()
  }
    // _clearUploadState() {§
    //     this.setState({ uploadProgress: 0, uploadTotal: 0, uploadWritten: 0, images: [], cancelled: false, });
    // }

    // _cancelUpload() {
    //     RNUploader.cancel();
    //     this.setState({uploading: false, cancelled: true});
    // }
    _uploadImages() {
        // let files = this.state.images.map( (file) => {
        //     return {
        //         name: 'file',
        //         filename: _generateUUID + '.jpg',
        //         filepath: file.uri,
        //         filetype: 'image/jpeg',
        //     }
        // });
        let files = this.state.images.map( (file) => {
            // return `data:image/jpeg;base64,${file.uri}`;
            return `${file.uri}`;

        });
        // console.log('!!! files 0 ', files[0]);
        let opts = {
            url: globalConfig.BackendURL,
            //files: files,
            params: {
                patname: this.props.photopiker.namePatient,
                patnote: this.props.photopiker.comment,
                os: `${DeviceInfo.getSystemName()}  ${DeviceInfo.getVersion()}`,
                device: `${DeviceInfo.getManufacturer()}  ${DeviceInfo.getModel()}`,
                deployType: process.env.NODE_ENV,
                appversion: DeviceInfo.getVersion() ? DeviceInfo.getVersion() : globalConfig.version,
                appinstanz: "",
                appname: configData.App.appTitle,
                appid: DeviceInfo.getBundleId() ? DeviceInfo.getBundleId() : configData.App.id,
                theme: globalConfig.theme,
                praxis_email: this.props.settings.practiceEmail,
                praxis_ort: this.props.settings.practiceLocation,
                praxis_name: this.props.settings.practiceName,
                praxis_pin: configData.App.PRAXIS_PIN,
                sw_bilderEmail: this.props.settings.getImagesByEmail,
                img1: files[0],
                img2: files[1],
                img3: files[2],
                img4: files[3],
            }
        };


        this.setState({ uploading: true, });
        RNUploader.upload(opts, (err, res) => {
            if (err || res.status != 200) {
                Alert.alert(
                    'FEHLER',
                    `Es ist folgender Fehler aufgetreten`,
                    [
                        {text: 'Ok', onPress: () => {
                            this.props.navigation.goBack();
                        }},
                    ]
                );
                return;
            }

            let status = res.status;
            let responseString = res.data;

            // console.log('Upload complete with status ' + status);
            // console.log(responseString);
            this.setState({uploading: false, uploadStatus: status});
            this.props.clearPhotos();
            Alert.alert(
                'Übertragung erfolgreich',
                responseString,
                [
                    {text: 'Ok', onPress: () => {
                        this.props.navigation.goBack();
                    }},
                ]
            );
        });

    }
  render() {
    const { settings, photopiker }= this.props;
    return (
      <ScrollView>
          <Text style={styles.Label}>
              {I18n.t('UPLOAD_DATA_PATDATA')}
          </Text>
        <List>
            <ListItem
                title="Name"
                rightTitle={photopiker.namePatient!== '' ? photopiker.namePatient.toString() : null}
                hideChevron
            />
            <ListItem
                title={I18n.t('TF_COMMENT')}
                rightTitle={photopiker.comment!== '' ? photopiker.comment.toString() : null}
                hideChevron
            />
        </List>
          <Text style={styles.Label}>
              {I18n.t('PRAXIS_SETTING')}
          </Text>
        <List>
            <ListItem
                title={I18n.t('PRAXIS_NAME')}
                rightTitle={settings.practiceName!== '' ? settings.practiceName.toString() : null}
                hideChevron
            />
            <ListItem
                title={I18n.t('UPLOAD_DATA_ORT')}
                rightTitle={settings.practiceLocation!== '' ? settings.practiceLocation.toString() : null}
                hideChevron
            />
            <ListItem
                title="Email"
                rightTitle={settings.practiceEmail!== '' ? settings.practiceEmail.toString() : null}
                hideChevron
            />
        </List>
          <Text style={styles.Label}>
              Datenuebertragung
          </Text>
          <ProgressBar
              fillStyle={{backgroundColor: '#00897b'}}
              backgroundStyle={{backgroundColor: '#cccccc', borderRadius: 2}}
              style={{marginTop: 10,marginLeft: 15, marginRight: 15, width: width-30 }}
              progress={this.state.uploadProgress}
          />
          <View style={styles.underBottom}>

              <Text style={{ fontSize: 11, color: 'gray', marginTop: 5, }}>
                  { ( this.state.uploadWritten / 1024 ).toFixed(0) }/{ ( this.state.uploadTotal / 1024 ).toFixed(0) } KB
              </Text>
          </View>
          <View style={styles.underBottom}>
              <Icon
                  style={{marginRight: 5,}}
                  name={'lock'}
                  type={'font-awesome'}
                  color={'#00897b'}
              />
              <Text>
                  {I18n.t('SSL_CLAIM')}
              </Text>
          </View>
      </ScrollView>
    );
  }
}

function _generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

const styles = StyleSheet.create({
    underBottom: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    Label: {
        fontSize: 20,
        marginTop: 15,
        marginLeft: 15
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
export default SendInformation;
