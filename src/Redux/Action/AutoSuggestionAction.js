import { ADD_ROOT, SEARCH_BAR } from "./ActionTypes";


export const AutoSuggestionAction = (root) => {
    return (dispatch) => {
        // You can dispatch your action here
        dispatch({ type: ADD_ROOT, payload: root });
    };
};