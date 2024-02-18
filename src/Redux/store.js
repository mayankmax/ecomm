import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './Reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
console.log("dbshd",store.getState())

export default store;
