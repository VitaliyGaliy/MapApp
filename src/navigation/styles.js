import colors from '../styles/colors';

export const defaultStackStyle = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.blue,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: 12,
      color: 'white',
      fontFamily: 'OpenSans',
    },
  },
};

export const defaultTabsStyle = {
  tabBarOptions: {
    activeTintColor: colors.white,
    labelStyle: {
      fontSize: 12,
      color: colors.white,
    },
    style: {
      backgroundColor: colors.gray,
      color: colors.white,
    },
  },
};
