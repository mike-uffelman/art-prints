
import { configureStore } from '@reduxjs/toolkit';
import {cartsReducer, addToCart} from './slices/cartsSlice';
import {searchReducer} from './slices/searchSlice';

const store = configureStore({
    reducer: {
        cart: cartsReducer,
        search: searchReducer
    }
})

export { store, addToCart };