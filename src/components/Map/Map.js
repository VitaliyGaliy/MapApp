import React, { Component } from 'react';
import {
  StyleSheet, View, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

import { actions } from '../../models/suppliers';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  constructor() {
    super();
    this.state = {
      region: {
        latitude: 39.7392,
        longitude: -104.9903,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {

  //       this.setState({
  //         region: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: LATITUDE_DELTA,
  //           longitudeDelta: LONGITUDE_DELTA,
  //         }
  //       });
  //     }
  //   );
  //   this.watchID = navigator.geolocation.watchPosition(
  //     position => {
  //       this.setState({
  //         region: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: LATITUDE_DELTA,
  //           longitudeDelta: LONGITUDE_DELTA,
  //         }
  //       });
  //     }
  //   );
  // }
  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }



  render() {
    const { region } = this.state


    return (

      <MapView

        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation={true}
        region={region}
        onRegionChange={region => this.setState({ region })}
      // onRegionChangeComplete={region => this.setState({ region })}
      >
        {/* <MapView.Marker
            coordinate={this.state.region}
          /> */}
      </MapView>

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
