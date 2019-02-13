import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
}
  from 'react-navigation';

import AuthScreen from './auth';

import { defaultStackStyle, defaultTabsStyle } from './styles';
import CustomIcon from '../styles/CustomIcon';

import {
  SuppliersScreen,
  SearchListScreen,
  FavoriteScreen,
  AccountScreen,
  SearchResultScreen,
  RegisterScreen,
} from '../screens';

const getIcon = name => ({ tintColor }) => <CustomIcon name={name} size={15} color={tintColor} />;

const AuthStack = createStackNavigator({ RegisterScreen }, {
  ...defaultStackStyle,
});

const Soeken = createStackNavigator({
  SearchListScreen,
  SearchResultScreen,
}, {
    ...defaultStackStyle,
    navigationOptions: {
      tabBarIcon: getIcon('Search'),
    },
  });
const Leveranciers = createStackNavigator({ SuppliersScreen }, {
  ...defaultStackStyle,
  navigationOptions: {
    tabBarIcon: getIcon('Suppliers'),
  },
});
const Favorieten = createStackNavigator({ FavoriteScreen }, {
  ...defaultStackStyle,
  navigationOptions: {
    tabBarIcon: getIcon('star-1'),
  },
});
const Account = createStackNavigator({ AccountScreen }, {
  ...defaultStackStyle,
  navigationOptions: {
    tabBarIcon: getIcon('Account'),
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

export default createAppContainer(createSwitchNavigator(
  {
    AuthStack,
    // AuthScreen,
    TabNav,
  },
  {
    initialRouteName: 'TabNav',
  },
));

// export default createAppContainer(TabNav);
