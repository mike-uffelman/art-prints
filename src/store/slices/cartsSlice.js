import { createSlice } from '@reduxjs/toolkit';

export const cartsSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const index = state.indexOf(action.payload);
            state.splice(index, 1)
        }
    }

})

export const { addToCart, removeFromCart } = cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;