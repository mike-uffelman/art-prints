import { createSlice } from "@reduxjs/toolkit";

const initialState = ['cats', 'food', 'nature', 'mountains', 'sunsets'];

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistory(state, action) {
            state.unshift(action.payload)
        },
        resetHistory(state, action) {
            return initialState;
        }
    }
})

export const { addHistory, resetHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;