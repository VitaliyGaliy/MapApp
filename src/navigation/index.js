import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
}
  from 'react-navigation';

import { defaultStackStyle, defaultTabsStyle } from './styles';

import {
  SuppliersScreen,
  SearchListScreen,
  FavoriteScreen,
  AccountScreen,
  SearchResultScreen,
  DetailsScreen,
} from '../screens';

const Soeken = createStackNavigator({ SearchListScreen, SearchResultScreen }, defaultStackStyle);
const Leveranciers = createStackNavigator({ SuppliersScreen, DetailsScreen }, defaultStackStyle);
const Favorieten = createStackNavigator({ FavoriteScreen }, defaultStackStyle);
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
