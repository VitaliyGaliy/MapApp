import React, { Component } from 'react';
import {
  Image, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HeaderButton from '../HeaderButton/HeaderButton';

import { actions } from '../../models/suppliers';
import styles from './styles';


class SearchScreen extends Component {
  render() {
    const { customWidth } = this.props;
    return (
      <View style={[styles.container, { width: customWidth }]}>
        <View style={styles.infoContainer}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../../../assets/img/homerSimpson.jpg')}
            />
          </View>

          <View style={styles.infoWrapper}>
            <Text style={styles.mainTitle}>ABX Zaagmij</Text>
            <View style={styles.itemWraper}>
              <View style={styles.iconWraper}>
                <Icon
                  style={styles.itemIcon}
                  name="map-marker"
                  size={14}
                  color="#900"
                />
              </View>
              <Text style={styles.itemText}>GerderLand </Text>
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
              <Text style={styles.itemText}>089 456 45 65</Text>
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
              <Text style={styles.itemText}>info@abex.com</Text>
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
              <Text style={styles.itemText}>www.zaagij.com</Text>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  suppliersList: 22,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(SearchScreen);
