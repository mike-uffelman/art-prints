import { createSlice } from "@reduxjs/toolkit";


// initial state defined outside of slice object to allow for reset() reducer to have initial state available
const initialState = {
    results:[],
    term: '',
    tags: [],
    // pages: ''
}

// search slice for search bar or tag click search requests
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // adds search results to the store
        addResults(state, action) {
            // return action.payload
            console.log(state)
            console.log(action.payload)

            // push results to arary - allows for 'load more' pagination to display previous and new results
            state.results.push(action.payload.results);

            // term and tags are updated as these can be singular to the result
            state.term = action.payload.term;
            state.tags = action.payload.tags;

        },

        // reset reducer for new searches, via search bar or tag click
        reset(state, action) {
            return initialState;
        }
    }
})

export const {addResults, reset} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;