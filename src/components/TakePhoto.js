import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    Alert,
} from 'react-native';
import {
    List,
    ListItem,
    Button,
    Icon,
} from 'react-native-elements';
import {
    Kohana,
    Fumi
} from 'react-native-textinput-effects';
import imagesApp from '../constants/Images';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import I18n from '../i18n/index'

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 4 : width / 4 ;

class TakePhoto extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.onTakePhotoPress = this.onTakePhotoPress.bind(this);
  }
  onTakePhotoPress (data) {
      // this.props.navigation.navigate('CameraRoll', data);
      this.props.navigation.navigate('Camera', data);
  }
  onSendInfoPress () {
    const { navigation, settings, photopiker } = this.props;
    if (settings.practiceName === '' || settings.practiceLocation === '') {
        Alert.alert(
            'Hinweis',
            "Sie haben noch keine Praxisdaten in den Einstellungen hinterlegt",
            [
                {text: 'Praxisdaten jetzt hinterlegen', onPress: () => {
                    navigation.navigate('Settings', {})
                }},
                {text: 'Abbrechen', onPress: () => {

                }},
            ]
        );
    }else if (photopiker.namePatient ==='') {
        Alert.alert(
            '',
            "Bitte tragen Sie den Namen des Patienten ein.",
            [
                {text: 'Ok', onPress: () => {}},
            ]
        );

    }else if (photopiker.photos.length === 0) {
        Alert.alert(
            '',
            "Bitte ubermitteln Sie uns mindestens 1 Photo",
            [
                {text: 'Ok', onPress: () => {}},
            ]
        );

    }else {
        navigation.navigate('SendInfo', {});
    }
  }
  currentImage = (uid) =>{
      return this.props.photopiker.photos.filter(photo => (photo.uid === uid));
  };
  render() {
    return (
      <ScrollView>
        <List>
            <Fumi
                label={I18n.t('TF_PATNAME_HINT')}
                iconClass={FontAwesomeIcon}
                iconName={'user'}
                iconColor={'#00897b'}
                onChangeText={(val) => {
                    this.props.setNamePatient(val);
                }}
                value={this.props.photopiker.namePatient}
            />
            <Fumi
                label={I18n.t('TF_COMMENT_HINT')}
                iconClass={FontAwesomeIcon}
                iconName={'comment'}
                iconColor={'#00897b'}
                onChangeText={(val) => {
                    this.props.setCommentPatient(val);
                }}
                value={this.props.photopiker.comment}
            />
        </List>

          <View style={styles.viewPhotos}>
              <TouchableOpacity
                  style={styles.viewImage}
                  onPress={() => {
                      this.onTakePhotoPress({uid: 1});
                  }}
              >
                  <Text>
                      {I18n.t('PHOTOLABEL_1')}
                  </Text>
                  {
                   this.currentImage(1)[0] ?
                       <Image
                           style={{borderRadius: 5, width: scale, height: scale}}
                           // source={this.currentImage(1)[0]}
                           source={{ uri: `data:image/jpeg;base64,${this.currentImage(1)[0].uri}` }}

                       />
                       :
                       <Image
                           style={{width: scale, height: scale}}
                           source={imagesApp.profilphoto}
                       />
                  }
                  {
                  this.currentImage(1)[0] ?
                      <View style={styles.iconViewTop}>
                          <Icon
                              name={'check'}
                              type={'font-awesome'}
                              color={'rgba(255,255,255,1)'}
                              size={14}
                          />
                      </View>
                      :
                      <View style={styles.iconViewTop}>
                          <Icon
                              name={'camera'}
                              type={'font-awesome'}
                              color={'rgba(255,255,255,1)'}
                              size={14}
                          />
                      </View>
                  }

              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.viewImage}
                  onPress={() => {
                      this.onTakePhotoPress({uid: 2});
                  }}
              >
                  <Text>
                      {I18n.t('PHOTOLABEL_2')}
                  </Text>
                  {
                      this.currentImage(2)[0] ?
                          <Image
                              style={{borderRadius: 5, width: scale, height: scale}}
                              // source={this.currentImage(2)[0]}
                              source={{ uri: `data:image/jpeg;base64,${this.currentImage(2)[0].uri}` }}
                          />
                          :
                          <Image
                              style={{width: scale, height: scale}}
                              source={imagesApp.profilphoto}
                          />
                  }
                  {
                      this.currentImage(2)[0] ?
                          <View style={styles.iconViewTop}>
                              <Icon
                                  name={'check'}
                                  type={'font-awesome'}
                                  color={'rgba(255,255,255,1)'}
                                  size={14}
                              />
                          </View>
                          :
                          <View style={styles.iconViewTop}>
                              <Icon
                                  name={'camera'}
                                  type={'font-awesome'}
                                  color={'rgba(255,255,255,1)'}
                                  size={14}
                              />
                          </View>
                  }
              </TouchableOpacity>

          </View>
          <View style={styles.viewPhotos}>
              <TouchableOpacity
                  style={styles.viewImageButton}
                  onPress={() => {
                      this.onTakePhotoPress({uid: 3});
                  }}
              >
                  {
                      this.currentImage(3)[0] ?
                          <Image
                              style={{borderRadius: 5, width: scale, height: scale}}
                              // source={this.currentImage(3)[0]}
                              source={{ uri: `data:image/jpeg;base64,${this.currentImage(3)[0].uri}` }}
                          />
                          :
                          <Image
                              style={{width: scale, height: scale}}
                              source={imagesApp.profilphoto}
                          />
                  }
                  {
                      this.currentImage(3)[0] ?
                          <View style={styles.iconViewBottom}>
                              <Icon
                                  name={'check'}
                                  type={'font-awesome'}
                                  color={'rgba(255,255,255,1)'}
                                  size={14}
                              />
                          </View>
                          :
                          <View style={styles.iconViewBottom}>
                              <Icon
                                  name={'camera'}
                                  type={'font-awesome'}
                                  color={'rgba(255,255,255,1)'}
                                  size={14}
                              />
                          </View>
                  }
                  <Text>
                      {I18n.t('PHOTOLABEL_3')}
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.viewImageButton}
                  onPress={() => {
                      this.onTakePhotoPress({uid: 4});
                  }}
              >
                  {
                      this.currentImage(4)[0] ?
                          <Image
                              style={{borderRadius: 5, width: scale, height: scale}}
                              // source={this.currentImage(4)[0]}
                              source={{ uri: `data:image/jpeg;base64,${this.currentImage(4)[0].uri}` }}
                          />
                          :
                          <Image
                              style={{width: scale, height: scale}}
                              source={imagesApp.profilphoto}
                          />
                  }
                  {
                      this.currentImage(4)[0] ?
                          <View style={styles.iconViewBottom}>
                              <Icon
                                  name={'check'}
                                  type={'font-awesome'}
                                  color={'rgba(255,255,255,1)'}
                                  size={14}
                              />
                          </View>
                          :
                          <View style={styles.iconViewBottom}>
                              <Icon
                                  name={'camera'}
                                  type={'font-awesome'}
                                  color={'rgba(255,255,255,1)'}
                                  size={14}
                              />
                          </View>
                  }
                  <Text>
                      {I18n.t('PHOTOLABEL_4')}
                  </Text>
              </TouchableOpacity>

          </View>
          <View style={styles.viewBotton}>
              <Button
                  onPress={() => {
                      this.onSendInfoPress();
                  }}
                  backgroundColor={'#397af8'}
                  raised
                  iconRight
                  icon={{name: 'send', type: 'font-awesome'}}
                  title={I18n.t('PATIENT_SEND_DATA')} />
              <View style={styles.underBottom}>
                  <Icon
                      style={{marginRight: 5,}}
                      name={'lock'}
                      type={'font-awesome'}
                      color={'rgba(0,0,0,.6)'}
                  />
                  <Text>
                      {I18n.t('SSL_CLAIM')}
                  </Text>
              </View>


          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    iconViewTop:{
        width: scale/3,
        height: scale/3,
        position: 'absolute',
        top: 10,
        right: -1,
        backgroundColor:'blue',
        borderRadius: scale/6,
        borderWidth: 3,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    iconViewBottom:{
        width: scale/3,
        height: scale/3,
        position: 'absolute',
        top: 3,
        right: 9,
        backgroundColor:'blue',
        borderRadius: scale/6,
        borderWidth: 3,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    viewImage: {
        margin: 10,
        alignItems: 'center'
    },
    viewImageButton: {
        padding: 10,
        alignItems: 'center'
    },
    viewPhotos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
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

export default TakePhoto;
