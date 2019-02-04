import { combineReducers } from 'redux';


import appStoreReducer from './appStore/reducers';

export default combineReducers({
  appStore : appStoreReducer,
});
