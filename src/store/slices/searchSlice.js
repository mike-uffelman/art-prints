import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results:[],
    term: '',
    tags: [],
    // pages: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addResults(state, action) {
            // return action.payload
            console.log(state)
            console.log(action.payload)

            state.results.push(action.payload.results);
            state.term = action.payload.term;
            state.tags = action.payload.tags;

        },
        reset(state, action) {
            return initialState;
        }
    }
})

export const {addResults, reset} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;