
import { configureStore } from '@reduxjs/toolkit';
import {cartsReducer} from './slices/cartsSlice';
import {searchReducer} from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        cart: cartsReducer,
        search: searchReducer
    }
})