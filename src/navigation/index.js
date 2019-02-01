import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
}
  from 'react-navigation';

import { defaultStackStyle, defaultTabsStyle } from './styles';
import CustomIcon from '../styles/CustomIcon';

import {
  SuppliersScreen,
  SearchListScreen,
  FavoriteScreen,
  AccountScreen,
  SearchResultScreen,
  DetailsScreen,
} from '../screens';

const getIcon = name => ({ tintColor }) => <CustomIcon name={name} size={15} color={tintColor} />;

const Soeken = createStackNavigator({ SearchListScreen, SearchResultScreen }, {
  ...defaultStackStyle,
  navigationOptions: {
    tabBarIcon: getIcon('star-1'),
  },
});
const Leveranciers = createStackNavigator({ SuppliersScreen, DetailsScreen }, defaultStackStyle);
const Favorieten = createStackNavigator({ FavoriteScreen }, {
  ...defaultStackStyle,
  navigationOptions: {
    tabBarIcon: getIcon('star-1'),
  },
});
const Account = createStackNavigator({ AccountScreen }, {
  ...defaultStackStyle,
  navigationOptions: {
    tabBarLabel: 'Mijn account',
  },
});

const TabNav = createBottomTabNavigator(
  {
    Leveranciers,
    Soeken,
    Favorieten,
    Account,
  },
  defaultTabsStyle,
);

export default createAppContainer(TabNav);
