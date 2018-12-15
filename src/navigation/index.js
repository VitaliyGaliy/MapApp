import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
}
    from 'react-navigation';

import SuppliersScreen from '../screens/Suppliers/SuppliersScreen';
import SearchScreen from '../screens/Search/SearchScreen';


const TabNav = createBottomTabNavigator(
    {
        Suppliers: createStackNavigator({
            Suppliers: {
                screen: SuppliersScreen
            },
        }),
        Search: createStackNavigator({
            Search: {
                screen: SearchScreen
            },
        }),
    }
);

export default createAppContainer(TabNav);