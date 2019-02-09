import { AsyncStorage } from 'react-native';

const types = {
  SET_ITEM_TO_FAVOURITE: 'SET_ITEM_TO_FAVOURITE',
  SET_FAVOURITE_ITEMS: 'SET_FAVOURITE_ITEMS',
};

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FAVOURITE_ITEMS': {
      return {
        ...state,
        items: action.items,
      };
    }
    case 'SET_ITEM_TO_FAVOURITE': {
      const index = state.items.findIndex(item => item.id === action.item.id);
      if (index === -1) {
        return {
          ...state,
          items: state.items.concat({ ...action.item, isSelected: true }),
        };
      }
      return {
        ...state,
        items: [...state.items.slice(0, index),
          ...state.items.slice(index + 1)],
      };
    }
    default:
      return state;
  }
}

export const addItemToFavourite = item => async (dispatch) => {
  try {
    const favItem = { ...item, isSelected: true };
    const favouriteItems = await AsyncStorage.getItem('favourite') || '[]';
    let parsedItems = JSON.parse(favouriteItems);

    const index = parsedItems.findIndex(i => i.id === favItem.id);
    if (index === -1) {
      parsedItems = parsedItems.concat(favItem);
    } else {
      parsedItems = [...parsedItems.slice(0, index),
        ...parsedItems.slice(index + 1)];
    }
    await AsyncStorage.setItem('favourite', JSON.stringify(parsedItems));

    return dispatch({
      type: types.SET_ITEM_TO_FAVOURITE,
      item: favItem,
    });
  } catch (error) {
    console.log('error!!!!!', error);
  }
};

const setFavouriteItems = () => async (dispatch) => {
  try {
    const items = await AsyncStorage.getItem('favourite') || '[]';

    const parsedItems = JSON.parse(items);

    return dispatch({
      type: types.SET_FAVOURITE_ITEMS,
      items: parsedItems,
    });
  } catch (error) {
    // Error retrieving data
  }
};

export const actions = {
  addItemToFavourite,
  setFavouriteItems,
};
