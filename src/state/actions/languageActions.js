import * as types from '../constants';

export function setLanguage(value) {
    return {
        type: types.SET_LANGUAGE,
        payload: value,
    };
}
