const types = {
    SET_GRID: 'GET_SUPPLIERS_LIST'
};

const initialState = {
    suppliersList: []
};

export default function reducer(state = initialState, action) {
    if (action.type in types) {
        const { type, ...payload } = action;

        return { ...state, ...payload };
    }
    return state;
}

export const setSuppliersList = grid => {
    console.log('suppliersList', suppliersList);

    return {
        type: types.GET_SUPPLIERS_LIST,
        suppliersList
    };
};
