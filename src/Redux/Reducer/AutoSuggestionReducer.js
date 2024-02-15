const initialState = {
    trie:null //trie default value
}

const AutoSuggestionReducer = (state = (initialState), action) =>{

    switch (action.type) {
        case SEARCH_BAR_:
            return{
                ...state,
                trie:action.payload

            }
    
        default:
            return state;
    }

}