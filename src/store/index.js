
import { configureStore } from '@reduxjs/toolkit';
import {cartsReducer, addToCart} from './slices/cartsSlice';
import {searchReducer} from './slices/searchSlice';
import { reviewReducer } from './slices/reviewsSlice';

const store = configureStore({
    reducer: {
        cart: cartsReducer,
        search: searchReducer,
        reviews: reviewReducer
    }
})

export { store };