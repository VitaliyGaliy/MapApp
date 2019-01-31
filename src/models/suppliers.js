import axios from 'axios';

const types = {
  SET_SUPPLIERS_LIST: 'SET_SUPPLIERS_LIST',
  LOAD_MORE_SUPPLIERS: 'LOAD_MORE_SUPPLIERS',
  CLEAR_LIST: 'CLEAR_LIST',
};

const initialState = {
  suppliersList: [],
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

    default:
      return state;
  }
}

const URL = 'https://veluweb.nl/2018/extranet/api/v1.php?method=getCompanies';

export const setSuppliersList = (searchVal, type, page) => (dispatch) => {
  axios.get(URL, {
    params: {
      page,
      limit: 20,
      // [type]: searchVal,
      // ...(searchVal ? { b_ptag: searchVal } : {}),
    },
  })
    .then(({ data }) => {
      dispatch({
        type: types.SET_SUPPLIERS_LIST,
        suppliersList: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
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
