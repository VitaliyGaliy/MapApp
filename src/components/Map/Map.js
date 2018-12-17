import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

import { actions } from '../../models/suppliers';

class Map extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Title"
            description="This is title"
          />
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  suppliersList: 22,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(Map);
