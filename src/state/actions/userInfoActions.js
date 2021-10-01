import * as types from '../constants';

export function setUserInfo(value = null) {
    return {
        type: types.SET_USER_INFO,
        payload: value,
    };
}
