import React from 'react';
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
    mode: 'modal',
    headerMode: 'none',
});

export const Root = StackNavigator({
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
  //mode: 'card',
  //headerMode: 'none',
});
