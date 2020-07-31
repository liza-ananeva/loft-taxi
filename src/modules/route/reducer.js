import * as constants from './constants';

const initialState = {
    addresses: [],
    route: [],
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case constants.LOAD_ADDRESS_LIST:
            return {
                ...state,
                isLoading: true
            };
        case constants.LOAD_ADDRESS_LIST_SUCCESS:
            return {
                ...state,
                addresses: action.payload,
                isLoading: false
            };
        case constants.LOAD_ADDRESS_LIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case constants.CREATE_ROUTE:
            return {
                ...state,
                isLoading: true
            };
        case constants.CREATE_ROUTE_SUCCESS:
            console.log('!!!', action.payload)
            return {
                ...state,
                route: action.payload,
                isLoading: false
            };
        case constants.CREATE_ROUTE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}
