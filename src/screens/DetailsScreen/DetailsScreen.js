import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../../models/map';

import styles from './styles';
import Map from '../../components/Map/Map';
import HorizontalSlider from '../../components/HorizontalSlider/HorizontalSlider';
import SearchHeader from '../../components/SearchHeader/SearchHeader';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Leveranciers',
  }

  render() {
    const {
      navigation: { navigate },
      navigation, suppliersList,
      setItemIndex, currentItemIndex,
    } = this.props;
    const singleItemData = navigation.getParam('itemId');
    console.log('singleItemData', singleItemData);

    const data = singleItemData || suppliersList;
    return (
      <View style={styles.container}>
        <SearchHeader
          mainScreen="SuppliersScreen"
          navigate={navigate}
        />
        <Map
          data={data}
          singleItemData={singleItemData}
          setItemIndex={setItemIndex}
        />
        <HorizontalSlider
          dataType="suppliers"
          data={data}
          currentItemIndex={currentItemIndex}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchList: state.search.searchList.items,
  suppliersList: state.suppliers.suppliersList.items,
  currentItemIndex: state.map.currentItemIndex,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(DetailsScreen);
