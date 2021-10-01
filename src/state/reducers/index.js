import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducers';
import languageReducer from './languageReducers';

export default combineReducers({
    userInfoReducer,
    languageReducer,
});
