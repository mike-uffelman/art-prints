import { createSlice } from '@reduxjs/toolkit';

export const cartsSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            console.log('removing...')
        }
    }

})

export const { addToCart, removeFromCart } = cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;