const types = {
  SET_CURRENT_ITEM_INDEX: 'SET_CURRENT_ITEM_INDEX',
};

const initialState = {
  currentItemIndex: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_ITEM_INDEX': {
      return {
        ...state,
        currentItemIndex: action.currentItemIndex,
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

export const actions = {
  setItemIndex,
};
