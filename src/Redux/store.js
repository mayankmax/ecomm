import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './Reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("dbshd",store.getState())

export default store;
