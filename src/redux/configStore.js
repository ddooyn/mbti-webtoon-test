import { createStore, combineReducers } from 'redux';
import mbtiqna from './modules/mbtiqna';

const rootReducer = combineReducers({ mbtiqna });
const store = createStore(rootReducer);

export default store;
