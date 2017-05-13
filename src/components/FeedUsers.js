import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { List, ListItem, Icon, } from 'react-native-elements';
import GiftedSpinner from 'react-native-gifted-spinner';

import { configData } from '../branding/index';


class Feed extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
  }
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  componentWillMount() {
  }
  render() {
    // console.log("this.props",this.props);
    return (
      <ScrollView style={styles.scrollView} contentContainerStyle={{paddingBottom: 15}}>
        <List>
          {configData.users ?
              configData.users.map((user, id) => (
                  <TouchableOpacity key={id} onPress={() => this.onLearnMore(user)} style={styles.containerPanelTop_inner}>
                      <Image  style={styles.panelTop_innerUserImage}  source={user.person_image ? user.person_image : null }/>
                      <View style={styles.containerPanelTop_innerDetail}>
                          <Text
                              numberOfLines={1}
                              style={styles.panelTop_LabelTitle}>{`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}</Text>
                          <Text
                              numberOfLines={1}
                              style={styles.panelTop_LabelSubTitle}>{user.subTitle}</Text>
                          <View style={styles.iconBar}>
                              {
                                  user.phone ?
                                      <Icon
                                          style={{marginRight: 5,}}
                                          name={'phone'}
                                          type={'font-awesome'}
                                          color={'#00897b'}
                                          size={20}
                                      />
                                      : null
                              }
                              {
                                  user.email ?
                                      <Icon
                                          style={{marginRight: 5,}}
                                          name={'envelope'}
                                          type={'font-awesome'}
                                          color={'#00897b'}
                                          size={16}
                                      />
                                      : null
                              }
                              {
                                  user.skype ?
                                      <Icon
                                          style={{marginRight: 5,}}
                                          name={'skype'}
                                          type={'font-awesome'}
                                          color={'#00897b'}
                                          size={18}
                                      />
                                      : null
                              }
                          </View>

                      </View>
                  </TouchableOpacity>
                  // <ListItem
                  //     key={user.login.username}
                  //     roundAvatar
                  //     avatar={{ uri: user.picture.thumbnail }}
                  //     title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                  //     subtitle={user.email}
                  //     onPress={() => this.onLearnMore(user)}
                  // />
              )) :  <View><GiftedSpinner /><Text>{'None User Data'}</Text></View>
          }
        </List>
      </ScrollView>
    );
  }
}
Feed.propTypes = {

};

const styles = StyleSheet.create({
    scrollView: {
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent:'flex-start',
    },
    containerPanelTop_inner: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent:'flex-start',
    },
    panelTop_innerUserImage: {
        height:70,
        width:70,
        borderRadius: 35,
        marginRight: 10,
    },
    containerPanelTop_innerDetail: {
        flex: 1,
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
export default Feed;
