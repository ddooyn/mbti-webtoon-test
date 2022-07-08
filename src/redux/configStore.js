import { createStore, combineReducers } from 'redux';
import mbtiqna from './modules/mbtiqna';
import mbti from './modules/mbti'

const rootReducer = combineReducers({ mbtiqna, mbti });
const store = createStore(rootReducer);

export default store;
