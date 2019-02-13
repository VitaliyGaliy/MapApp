import React, { Component } from 'react';
import {
  Dimensions, PermissionsAndroid,
} from 'react-native';

// import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import colors from '../../styles/colors';

import CustomIcon from '../../styles/CustomIcon';
import { getRegionForCoordinates } from './MapUtils';

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
      region: {
        latitude: 52.0755032,
        longitude: 4.5555928,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      selectedPin: -1,
    };
    this.mapRef = null;
  }

  componentDidMount() {
    const { data } = this.props;
    this.requestLocationPermission();

    const markers = data.map(marker => ({
      latitude: parseFloat(marker.lat),
      longitude: parseFloat(marker.lng),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      title: marker.c_name,
      id: marker.id,
      currentUserPosition: null,
    }
    ));

    this.setState({
      markers,
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'SmartCity requires your location',
          message: 'Using your location our aggressive algorithm will help you find almost everything in your neighbourhood'
            + ', Otherwise app will not work',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getUserLocation();
        this.watchUserLocation();
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords: { latitude, longitude, accuracy } } = position;

        const { markers } = this.state;
        const coords = getRegionForCoordinates(markers.concat(position.coords));

        this.setState({
          region: coords,
          currentUserPosition: { latitude, longitude },
        });
      },
      error => this.setState({ error: error.message }),
      { timeout: 50000, maximumAge: 1000 },
    );
  }

  watchUserLocation = () => {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { coords: { latitude, longitude, accuracy } } = position;
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
        const latitudeDelta = accuracy / oneDegreeOfLatitudeInMeters * 100;
        const longitudeDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(latitude * (Math.PI / 180))) * 100;
        this.setState({
          currentUserPosition: {
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          },
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: false, timeout: 20000, distanceFilter: 1,
      },
    );
  }


  render() {
    const {
      markers, selectedPin, region, currentUserPosition,
    } = this.state;
    const { setItemIndex } = this.props;

    return (

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={region}
        showsUserLocation={false}
        onRegionChangeComplete={e => this.setState({ region: e })}
        ref={(ref) => { this.mapRef = ref; }}
      >
        {
          currentUserPosition
          && (
            <MapView.Marker
              // pinColor={index === selectedPin ? colors.blue : '#e40128'}
              coordinate={currentUserPosition}
            >
              <CustomIcon
                style={styles.itemIcon}
                name="current-location"
              />
            </MapView.Marker>
          )
        }

        {
          markers.map((marker, index) => (
            <MapView.Marker
              pinColor={index === selectedPin ? colors.blue : '#e40128'}
              key={`${marker.id}-${index}`}
              coordinate={marker}
              onPress={() => {
                setItemIndex(index);
                this.setState({
                  selectedPin: index,
                  region: marker,
                });
              }}
              title={marker.title}
            />
          ))
        }
      </MapView>

    );
  }
}

export default Map;
