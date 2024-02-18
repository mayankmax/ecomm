import { ADD_ROOT } from "../Action/ActionTypes";

const initialState = {
    trie:null //trie default value
}

const AutoSuggestionReducer = (state = (initialState), action) =>{

    switch (action.type) {
        case ADD_ROOT:
            return{
                ...state,
                trie:action.payload

            }
    
        default:
            return state;
    }

}

export default AutoSuggestionReducer;