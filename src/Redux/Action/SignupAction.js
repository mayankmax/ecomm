import { SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE } from "./ActionTypes";

export const signupRequest = (userdata) => {
    return async (dispatch) => {
        dispatch({ type: SIGN_UP_REQUEST }); // Dispatch request action

        try {
            // Simulate asynchronous operation (e.g., API call)
            const response = await fetch('your/signup/api/endpoint', {
                method: 'POST',
                body: JSON.stringify(userdata),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            dispatch({ type: SIGN_UP_SUCCESS, payload: data }); // Dispatch success action
        } catch (error) {
            console.log("Error:", error); // Log the error message
            dispatch({ type: SIGN_UP_FAILURE, payload: { message: error.message, code:error.status} }); // Dispatch failure action
        }
    };
};
