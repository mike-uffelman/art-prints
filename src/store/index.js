
import { configureStore } from '@reduxjs/toolkit';
import {cartsReducer, addToCart} from './slices/cartsSlice';
import {searchReducer} from './slices/searchSlice';
import { reviewReducer } from './slices/reviewsSlice';
import { historyReducer } from './slices/historySlice';

const store = configureStore({
    reducer: {
        cart: cartsReducer,
        search: searchReducer,
        reviews: reviewReducer,
        history: historyReducer
    }
})

export { store };