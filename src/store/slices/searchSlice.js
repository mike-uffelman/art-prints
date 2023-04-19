import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: [],
    reducers: {
        addResults(state, action) {
            state.push(action.payload)
        }
    }
})

export const {addResults} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;