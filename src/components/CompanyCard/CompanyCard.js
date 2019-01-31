import React, { Component, Fragment } from 'react';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HeaderButton from '../HeaderButton/HeaderButton';

import { actions } from '../../models/search';
import styles from './styles';


class CompanyCard extends Component {
  render() {
    const { customWidth, item, handler } = this.props;

    return (
      <TouchableOpacity
        onPress={handler}
        style={[styles.container, { width: customWidth }]}
      >
        <Fragment>
          <View style={styles.infoContainer}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={{ uri: `https://veluweb.nl/2018/extranet/${item.avatar}` }}
              />
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.mainTitle}>{item.c_name}</Text>
              <View style={styles.itemWraper}>
                <View style={styles.iconWraper}>
                  <Icon
                    style={styles.itemIcon}
                    name="map-marker"
                    size={14}
                    color="#900"
                  />
                </View>
                <Text style={styles.itemAddress}>{` ${item.c_address}`}</Text>
              </View>
              <View style={styles.itemWraper}>
                <View style={styles.iconWraper}>
                  <Entypo
                    style={styles.itemIcon}
                    name="old-phone"
                    size={14}
                    color="#900"
                  />
                </View>
                <Text style={styles.itemText}>{item.c_phone}</Text>
              </View>
              <View style={styles.itemWraper}>
                <View style={styles.iconWraper}>
                  <Ionicons
                    style={styles.itemIcon}
                    name="ios-mail"
                    size={14}
                    color="#900"
                  />
                </View>
                <Text style={styles.itemText}>{item.c_email}</Text>
              </View>
              <View style={styles.itemWraper}>
                <View style={styles.iconWraper}>
                  <Ionicons
                    style={styles.itemIcon}
                    name="ios-globe"
                    size={14}
                    color="#900"
                  />
                </View>
                <Text style={styles.itemText}>{item.c_website}</Text>
              </View>
            </View>
            <View style={styles.rightSideContainer}>
              <AntDesign
                // style={styles.itemIcon}
                name="star"
                size={14}
                color="#900"
              />
              <Text>14.2 km</Text>
            </View>
          </View>
          <View style={styles.buttonsWrapper}>
            <HeaderButton
              Icon={Ionicons}
              text="bericht"
              name="ios-mail"
            />
            <HeaderButton
              Icon={Entypo}
              text="bell direct"
              name="old-phone"
            />
            <HeaderButton
              Icon={Ionicons}
              text="delen"
              name="ios-mail"
            />
          </View>
        </Fragment>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  // currentItemIndex: state.map.currentItemIndex,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(CompanyCard);
