import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, label: 'success', icon: 'check_circle', message: 'Added to Cart!'}, 
    {id: 5, label: 'info', icon: 'info', message: 'Please select a size!'}
]

export const toastsSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        addToast: (state, action) => {
            state.unshift(action.payload)
        },
        removeToast: (state, action) => {
            const index = Object.values(state).findIndex(item => item.id === action.payload);
            state.splice(index, 1)
        },
    }

})

export const { addToast, removeToast } = toastsSlice.actions;
export const toastsReducer = toastsSlice.reducer;