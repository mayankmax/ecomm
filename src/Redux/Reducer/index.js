// this will combine all the reducer

import { combineReducers } from 'redux';
import signupReducer from './SignupReducer';
import AutoSuggestionReducer from './AutoSuggestionReducer';
const rootReducer = combineReducers({
  user: signupReducer,
  autosuggest: AutoSuggestionReducer
  
});

export default rootReducer;