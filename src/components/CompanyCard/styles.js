import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    // backgroundColor: 'gray',
  },
  infoContainer: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e1e2e3',
    marginLeft: 2,
    marginRight: 2,
  },
  imageWrapper: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mainTitle: {
    marginLeft: 13,
    fontSize: 17,
  },
  itemWraper: {
    flexDirection: 'row',
  },

  iconWraper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    flex: 8,
  },
  itemIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  rightSideContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#dbdddc',
    backgroundColor: 'white',
  },
});
