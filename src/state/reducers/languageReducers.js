import * as types from '../constants';
import i18n from '../../localization/i18n';
import { DEFAULT_LANG } from "../../utils/constants";

const initialState = {
    language: i18n.language || DEFAULT_LANG,
};

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.SET_LANGUAGE:
            i18n.changeLanguage(actions.payload);
            return {
                ...state,
                language: actions.payload,
            };

        default:
            return state;
    }
}
