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
    activeBackgroundColor: colors.white,
    inactiveTintColor: colors.white,
    activeTintColor: colors.gray,
    labelStyle: {
      fontSize: 12,
      // color: colors.white,
      marginBottom: 7,
    },
    iconStyle: { height: 300, width: 30 },

    style: {
      backgroundColor: colors.gray,
      color: colors.white,
    },
  },
};
