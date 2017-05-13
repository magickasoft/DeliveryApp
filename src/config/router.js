import React from 'react';
import {
    Platform,
} from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FeedUsers from '../containers/FeedUsersContainer';
import Settings from '../containers/SettingsContainer';
import TakePhoto from '../containers/TakePhotoContainer';
import UserDetail from '../containers/UserDetailContainer';
import Home from '../containers/HomeContainer';
import LaborDetail from '../components/LaborDetail';
import CameraRollPicker from '../containers/CameraRollPickerContainer';
import SendInfo from '../containers/SendInformationContainer';
import LaborNews from '../components/LaborDetailWebView';
import CameraPicker from '../containers/CameraContainer';
import LoginStatus from '../containers/LoginStatusContainer';
import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import SelectUser from '../containers/SelectUserContainer';

import { configData } from '../branding/index';
import I18n from '../i18n/index'
export const FeedStack = StackNavigator({
  Feed: {
    screen: FeedUsers,
    navigationOptions: {
      title: I18n.t('LABOR'),
      headerBackTitle: null,
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({navigation, screenProps}) => ({
        cardStack: {
            gesturesEnabled: true,
        },
        // title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        title: configData.App.appTitle,
    }),
  },
}, {
    //mode: 'modal',
    //headerMode: 'none',
});
export const SelectUserStack = StackNavigator({
    SelectUser: {
        screen: SelectUser,
        navigationOptions: {
            title: '',
            headerBackTitle: null,
            headerTintColor:'#fafff4',
            headerStyle:{
                backgroundColor:'#22356B',
            },
            header: null,
        },
    }
}, {
    mode: 'modal',
    //headerMode: 'none',
});
export const IndexStack = StackNavigator({
    LoginStatus: {
        screen: LoginStatus,
        navigationOptions: {
            title: '',
            headerBackTitle: null,
            headerStyle:{
                backgroundColor:'#22356B',
            },
            //header: null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: I18n.t('LOGIN'),
            headerBackTitle: null,
            headerTintColor:'#fafff4',
            headerStyle:{
                backgroundColor:'#22356B',
            },
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: I18n.t('REGISTR'),
            headerBackTitle: null,
            headerTintColor:'#fafff4',
            headerStyle:{
                backgroundColor:'#22356B',
            },
        },
    },

}, {
    mode: 'card',
    //headerMode: 'none',
});


export const Root = StackNavigator({
    Index: {
        screen: IndexStack,
    },
    SelectUser: {
        screen: SelectUserStack,
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: configData.App.appTitle,
            headerBackTitle: null,
        },
    },
    LaborDetail: {
        screen: LaborDetail,
        navigationOptions: {
            title: I18n.t('LABOR'),
            headerTintColor:'#fafff4',
            headerStyle:{
                backgroundColor:'#22356B',
            }
        },
    },
    TakePhoto: {
        screen: TakePhoto,
        navigationOptions: {
            title: I18n.t('SUBMIT_FOTO'),
        },
    },
    SendInfo: {
        screen: SendInfo,
        navigationOptions: {
            title: I18n.t('SUBMIT_FOTO'),
        },
    },
    CameraRoll: {
        screen: CameraRollPicker,
        navigationOptions: {
            title: I18n.t('TAKE_PHOTO'),
        },
    },
    Camera: {
        screen: CameraPicker,
        navigationOptions: {
            title: I18n.t('TAKE_PHOTO'),
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: I18n.t('SETTINGS'),
        },
    },
    LaborNews: {
        screen: LaborNews,
        navigationOptions: {
            title: 'News',
        },
    },
    Feed: {
        screen: FeedStack,
    },
    // Feed: {
    //     screen: FeedUsers,
    //     navigationOptions: {
    //         title: I18n.t('LABOR'),
    //         headerBackTitle: null,
    //     },
    // },
    // Details: {
    //     screen: UserDetail,
    //     navigationOptions: ({navigation, screenProps}) => ({
    //         cardStack: {
    //             gesturesEnabled: true,
    //         },
    //         title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    //     }),
    // },
}, {
    initialRouteName: 'Index',
    headerMode: 'none',

    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});
