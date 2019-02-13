import {
  Dimensions,
} from 'react-native';

const types = {
  SET_CURRENT_ITEM_INDEX: 'SET_CURRENT_ITEM_INDEX',
  SET_CURRENT_EVERY_ONE_METER_POSITION: 'SET_CURRENT_EVERY_ONE_METER_POSITION',
  SET_CURRENT_EVERY_HUNDRED_METER_POSITION: 'SET_CURRENT_EVERY_HUNDRED_METER_POSITION',
};

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialState = {
  currentItemIndex: 0,
  currentPosition: {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_ITEM_INDEX': {
      return {
        ...state,
        currentItemIndex: action.currentItemIndex,
      };
    }
    case 'SET_CURRENT_EVERY_ONE_METER_POSITION': {
      return {
        ...state,
        currentEveryOneMeterPosition: action.currentEveryOneMeterPosition,
      };
    }
    case 'SET_CURRENT_EVERY_HUNDRED_METER_POSITION': {
      return {
        ...state,
        currentEveryHundredMeterPosition: action.currentEveryHundredMeterPosition,
      };
    }
    default:
      return state;
  }
}

export const setItemIndex = currentItemIndex => ({
  type: types.SET_CURRENT_ITEM_INDEX,
  currentItemIndex,
});

export const setCurrentEveryOneMeterPosition = currentEveryOneMeterPosition => ({
  type: types.SET_CURRENT_EVERY_ONE_METER_POSITION,
  currentEveryOneMeterPosition,
});

export const setCurrentEveryHundredMeterPosition = currentEveryHundredMeterPosition => ({
  type: types.SET_CURRENT_EVERY_HUNDRED_METER_POSITION,
  currentEveryHundredMeterPosition,
});

export const actions = {
  setItemIndex,
  setCurrentEveryOneMeterPosition,
  setCurrentEveryHundredMeterPosition,

};
