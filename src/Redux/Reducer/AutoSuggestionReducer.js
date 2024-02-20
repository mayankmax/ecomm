import { ADD_ROOT, SEARCH_RESULT } from "../Action/ActionTypes";

const initialState = {
    trie:null, //trie default value
    result:[]
}

const AutoSuggestionReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_ROOT:
            return{
                ...state,
                trie:action.payload,
            }
        case SEARCH_RESULT:
            return{
                ...state,
                result: action.payload,
            }
    
        default:
            return state;
    }

}

export default AutoSuggestionReducer;