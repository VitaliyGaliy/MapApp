import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3f6',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
  },
  listContainer: {
    flex: 1,
    margin: 15,
  },
  itemWrapper: {
    padding: 15,
  },
  input: {
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    paddingRight: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  itemSeparator: {
    borderTopWidth: 1,
    borderTopColor: colors.gray,
  },
  itemText: {
    fontFamily: 'OpenSans',
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    color: colors.gray,
  },
  // text:{

  // },
});
