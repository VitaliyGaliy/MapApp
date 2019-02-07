import axios from 'axios';
import { AsyncStorage } from 'react-native';

const types = {
  SET_SUPPLIERS_LIST: 'SET_SUPPLIERS_LIST',
  LOAD_MORE_SUPPLIERS: 'LOAD_MORE_SUPPLIERS',
  CLEAR_LIST: 'CLEAR_LIST',
  SET_ITEM_TO_FAVOURITE: 'SET_ITEM_TO_FAVOURITE',
};

const initialState = {
  suppliersList: {
    count: 0,
    items: []
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SUPPLIERS_LIST': {
      return {
        ...state,
        suppliersList: {
          count: action.suppliersList.count,
          items: action.suppliersList.items,
        },
      };
    }
    case 'LOAD_MORE_SUPPLIERS': {
      return {
        ...state,
        suppliersList: {
          count: action.suppliersList.count,
          items: state.suppliersList.items.concat(action.suppliersList.items),
        },
      };
    }

    case 'SET_ITEM_TO_FAVOURITE': {
      const selectedItem = state.suppliersList.items.map((item) => {
        const newItem = item;
        if (item.id === action.item.id && !item.isSelected) {
          newItem.isSelected = true;
        } else if (item.id === action.item.id && item.isSelected) {
          newItem.isSelected = false;
        }
        return newItem;
      });

      return {
        ...state,
        suppliersList: {
          ...state.suppliersList,
          items: selectedItem,
        },
      };
    }

    default:
      return state;
  }
}

const URL = 'https://veluweb.nl/2018/extranet/api/v1.php?method=getCompanies';

export const setSuppliersList = (searchVal, type, page) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        page,
        limit: 20,
        // [type]: searchVal,
        // ...(searchVal ? { b_ptag: searchVal } : {}),
      },
    });

    const isItemFavourite = await AsyncStorage.getItem('favourite') || '[]';

    const isItemFavouriteParsed = JSON.parse(isItemFavourite);
    data.items.map((fetchedData) => {
      const newFetchedData = fetchedData;
      isItemFavouriteParsed.forEach((parsed) => {
        if (fetchedData.id === parsed.id) {
          newFetchedData.isSelected = true;
        }
      });
      return newFetchedData;
    });

    dispatch({
      type: types.SET_SUPPLIERS_LIST,
      suppliersList: data,
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const loadMoreItems = (searchVal, type, page) => (dispatch) => {
  axios.get(URL, {
    params: {
      page,
      limit: 20,
      [type]: searchVal,
    },
  })
    .then(({ data }) => {
      dispatch({
        type: types.LOAD_MORE_SUPPLIERS,
        suppliersList: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const actions = {
  setSuppliersList,
  loadMoreItems,
};
