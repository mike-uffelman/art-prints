import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: 'review',
    initialState: [],
    reducers: {
        addReviews(state, action) {
            // return action.payload
            state.push(action.payload)
        }
    }
})

export const {addReviews} = reviewSlice.actions;
export const reviewReducer = reviewSlice.reducer;