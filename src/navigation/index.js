import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
}
  from 'react-navigation';

import { SuppliersScreen, SearchList, SearchResult } from '../screens';

const TabNav = createBottomTabNavigator(
  {
    SearchListTab: createStackNavigator({
      SearchList: {
        screen: SearchList,
      },
      SearchResult: {
        screen: SearchResult,
      },
    }),
    SuppliersTab: createStackNavigator({
      Suppliers: {
        screen: SuppliersScreen,
      },
    }),
  },
);

export default createAppContainer(TabNav);
