import { ADD_ROOT, SEARCH_RESULT } from "./ActionTypes";

export const AutoSuggestionAction = (trie) => {
    return {
        type: ADD_ROOT,
        payload: trie
    };
};

export const searchResultAction = (result) => {
    return {
        type: SEARCH_RESULT,
        payload: result
    };
};
