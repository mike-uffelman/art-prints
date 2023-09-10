import { createSlice } from '@reduxjs/toolkit';

export const cartsSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const index = Object.values(state).findIndex(item => item.id === action.payload);
            state.splice(index, 1)
        },
        updateCartItem: (state, action) => {
            const {id} = action.payload;
            
            Object.values(state).find(item => {
                if(item.id === id) {
                    item.quantity = action.payload.quantity
                    item.size = action.payload.size
                };
            
            })
        }
    }

})

export const { addToCart, removeFromCart, updateCartItem } = cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;