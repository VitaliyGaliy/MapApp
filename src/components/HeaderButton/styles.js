import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    marginRight: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  itemIcon: {
    marginRight: 10,
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: colors.red,
  },
});
