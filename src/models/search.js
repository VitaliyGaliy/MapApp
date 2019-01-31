import axios from 'axios';

const types = {
  SET_SEARCH_LIST: 'SET_SEARCH_LIST',
  LOAD_MORE_SEARCHED_SUPPLIERS: 'LOAD_MORE_SEARCHED_SUPPLIERS',
  CLEAR_LIST: 'CLEAR_LIST',
};

const initialState = {
  searchList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_LIST': {
      return {
        ...state,
        searchList: {
          count: action.searchList.count,
          items: action.searchList.items,
        },
      };
    }
    case 'LOAD_MORE_SEARCHED_SUPPLIERS': {
      return {
        ...state,
        searchList: {
          count: action.searchList.count,
          items: state.searchList.items.concat(action.searchList.items),
        },
      };
    }

    default:
      return state;
  }
}

const URL = 'https://veluweb.nl/2018/extranet/api/v1.php?method=getCompanies';

export const setSearchList = (searchVal, type, page) => (dispatch) => {
  axios.get(URL, {
    params: {
      page,
      limit: 20,
      [type]: searchVal,
      // ...(searchVal ? { b_ptag: searchVal } : {}),
    },
  })
    .then(({ data }) => {
      dispatch({
        type: types.SET_SEARCH_LIST,
        searchList: data,
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
        type: types.LOAD_MORE_SEARCHED_SUPPLIERS,
        searchList: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const actions = {
  setSearchList,
  loadMoreItems,
};
