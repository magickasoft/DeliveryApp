import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import {
    Tile,
    List,
    ListItem,
    Card,
} from 'react-native-elements';
import GiftedSpinner from 'react-native-gifted-spinner';
import Swiper from 'react-native-swiper';

import { configData } from '../branding/index';
import Communications from 'react-native-communications';
const { width, height } = Dimensions.get('window');

class UserDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
          <Swiper
              style={styles.wrapper}
              showsButtons={false}
              width={width}
              height={width/1.5}
              showsPagination={false}
              autoplay
              loop
          >
              {
                  configData.infoLabor.labor_images.map((entry, index) => {
                      return (
                          <Tile
                              key={index}
                              imageSrc={entry}
                              featured
                          />
                      );
                  })
              }
          </Swiper>
          <Card
              containerStyle={{marginLeft: 0 , marginRight: 0}}
          >
              <Text style={{marginBottom: 10}}>
                  {`${configData.infoLabor.location.name.toUpperCase()}`}
              </Text>
              <Text style={{marginBottom: 10}}>
                  {`${configData.infoLabor.location.street}, ${configData.infoLabor.location.postcode}, ${configData.infoLabor.location.city}`}
              </Text>
          </Card>
        <List>
            {
                configData.infoLabor.phone ?
                    <ListItem
                        title="Phone"
                        rightTitle={configData.infoLabor.phone}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                        onPress={() => {
                            Communications.phonecall(configData.infoLabor.phone_click ? configData.infoLabor.phone_click : configData.infoLabor.phone, true);
                        }}
                    />
                    : null
            }
            {
                configData.infoLabor.cell ?
                    <ListItem
                        title="Fax"
                        rightTitle={configData.infoLabor.cell}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                    />
                    : null
            }

        </List>

        <List>
            {
                configData.infoLabor.email ?
                    <ListItem
                        title="Email"
                        rightTitle={configData.infoLabor.email}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                        onPress={() => {
                            Communications.email([configData.infoLabor.email],null,null,'','')
                        }}
                    />
                    : null
            }
            {
                configData.infoLabor.url ?
                    <ListItem
                        title="Site"
                        rightTitle={configData.infoLabor.url}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                    />
                    : null
            }

        </List>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
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
export default UserDetail;
