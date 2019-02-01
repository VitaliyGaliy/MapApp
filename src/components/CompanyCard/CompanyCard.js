import React, { Fragment } from 'react';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderButton from '../HeaderButton/HeaderButton';

import styles from './styles';
import colors from '../../styles/colors';
import CustomIcon from '../../styles/CustomIcon';

const URI = 'https://veluweb.nl/2018/extranet';

const CompanyCard = ({ customWidth, item, handler }) => (
  <TouchableOpacity
    onPress={handler}
    style={[styles.container, { width: customWidth }]}
  >
    <Fragment>
      <View style={styles.infoContainer}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: `${URI}/${item.avatar}` }}
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
              <CustomIcon
                style={styles.itemIcon}
                name="phone"
                size={8}
                color={colors.gray}
              />
            </View>
            <Text style={styles.itemText}>{item.c_phone}</Text>
          </View>
          <View style={styles.itemWraper}>
            <View style={styles.iconWraper}>
              <CustomIcon
                style={styles.itemIcon}
                name="mail"
                size={8}
                color={colors.gray}
              />
            </View>
            <Text style={styles.itemText}>{item.c_email}</Text>
          </View>
          <View style={styles.itemWraper}>
            <View style={styles.iconWraper}>
              <CustomIcon
                style={styles.itemIcon}
                name="internet"
                size={10}
                color={colors.gray}
              />
            </View>
            <Text style={styles.itemText}>{item.c_website}</Text>
          </View>
        </View>
        <View style={styles.rightSideContainer}>
          <CustomIcon
            // style={styles.itemIcon}
            name="star-2"
            size={15}
            color={colors.red}
          />
          <Text>14.2 km</Text>
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <HeaderButton
          Icon={CustomIcon}
          text="bericht"
          name="mail"
        />
        <HeaderButton
          Icon={CustomIcon}
          text="bell direct"
          name="phone"
        />
        <HeaderButton
          Icon={CustomIcon}
          text="delen"
          name="sharing-interface"
        />
      </View>
    </Fragment>
  </TouchableOpacity>
);

export default CompanyCard;
