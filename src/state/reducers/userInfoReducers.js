import * as types from '../constants';

const initialState = {
    userInfo: null,
};

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.SET_USER_INFO:
            return {
                ...state,
                userInfo: actions.payload,
            };

        default:
            return state;
    }
}
