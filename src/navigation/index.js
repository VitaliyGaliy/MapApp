import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
}
    from 'react-navigation';

import SuppliersScreen from '../screens/Suppliers/SuppliersScreen';
// import SearchScreen from '../screens/Search/SearchScreen';
import CompanyesList from '../screens/CompanyesList/CompanyesList';


const TabNav = createBottomTabNavigator(
    {
        Suppliers: createStackNavigator({
            Suppliers: {
                screen: SuppliersScreen,
            },
        }),
        Search: createStackNavigator({
            Search: {
                screen: CompanyesList,
            },
        }),
    },
);

export default createAppContainer(TabNav);
