import * as constants from './constants';

const initialState = {
    card: {},
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SAVE_CARD:
            console.log('SAVE_CARD');
            return {
                ...state
            };
        case constants.SAVE_CARD_SUCCESS:
            console.log('SAVE_CARD_SUCCESS');
            const user = JSON.parse(localStorage.getItem('user'));
            
            user.card = action.payload;
            localStorage.setItem('user', JSON.stringify(user));
            return {
                ...state,
                card: action.payload
            };
        case constants.SAVE_CARD_FAILURE:
            console.log('SAVE_CARD_FAILURE');
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
