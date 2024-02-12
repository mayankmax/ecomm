// this will combine all the reducer

import { combineReducers } from 'redux';
import signupReducer from './SignupReducer';
const rootReducer = combineReducers({
  user: signupReducer,
  
});

export default rootReducer;