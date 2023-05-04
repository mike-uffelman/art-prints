import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results:[],
        term: '',
        tags: [],
        // pages: ''
    },
    reducers: {
        addResults(state, action) {
            // return action.payload
            console.log(state)
            console.log(action.payload)

            state.results.push(action.payload.results);
            state.term = action.payload.term;
            state.tags.push(action.payload.tags);

        }
    }
})

export const {addResults} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;