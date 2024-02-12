import { SIGN_UP_FAILURE,SIGN_UP_REQUEST,SIGN_UP_SUCCESS } from "../Action/ActionTypes";

const initialState = {
    isSubmitting: false,
    error: null,
    userData: {},
    isAuthenticated: false, // Added for authentication status
  };
  
  function signupReducer(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        return {
          ...state,
          userData: action.payload,
          isSubmitting: true,
        };
  
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          isSubmitting: false,
          error: null,
          userData: action.payload,
          isAuthenticated: true, // Set authenticated on success
        };
  
      case SIGN_UP_FAILURE:
        console.log("Sign up failed with error:", action.payload);
        return {
          ...state,
          isSubmitting: false,
          error: { message: action.payload.message, code: action.payload.code }, // Use an error object
          userData: {},
        };
  
      default:
        return state;
    }
  }

  export default signupReducer;
  