import React, { Component } from 'react';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
// import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

import { actions } from '../../models/map';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 52.0755032;
const LONGITUDE = 4.5555928;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  constructor() {
    super();
    this.state = {
      markers: [{
        latitude: 52.0755032,
        longitude: 4.5555928,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }],
    };
    this.mapRef = null;
  }

  componentDidMount() {
    const { searchList } = this.props;
    const markers = searchList.map(marker => ({
      latitude: parseFloat(marker.lat),
      longitude: parseFloat(marker.lng),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      title: marker.c_name,
      id: marker.id,
    }
    ));
    this.setState({
      markers,
    });
    console.log('markers', markers);
    // this.mapRef.fitToSuppliedMarkers(
    //   markers,
    //   true, // not animated
    // );
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { markers } = this.state;
    const { items, setItemIndex } = this.props;
    console.log('markers', markers);

    return (

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation
        region={markers[0]}
        ref={(ref) => { this.mapRef = ref; }}
      // onRegionChange={region => this.setState({ region })}
      // onRegionChangeComplete={region => this.setState({ region })}
      >
        {
          markers.map((marker, index) => (
            <MapView.Marker
              key={marker.id}
              stopPropagation
              coordinate={marker}
              onPress={() => {
                setItemIndex(index);
              }}
              title={marker.title}
            />
          ))
        }
      </MapView>

    );
  }
}

const mapStateToProps = state => ({
  searchList: state.search.searchList.items,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(Map);
