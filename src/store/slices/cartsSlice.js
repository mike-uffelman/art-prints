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
            console.log(action.payload)
            const index = Object.values(state).findIndex(item => item.id === action.payload);
            state.splice(index, 1)
        },
        editCartItem: (state, action) => {

        }
    }

})

export const { addToCart, removeFromCart } = cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;