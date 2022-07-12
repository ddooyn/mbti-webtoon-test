import { createStore, combineReducers } from 'redux';
import mbtiqna from './modules/mbtiqna';
import mbti from './modules/mbti'
import resultdata from './modules/resultdata';

const rootReducer = combineReducers({ mbtiqna, mbti, resultdata });
const store = createStore(rootReducer);

export default store;
