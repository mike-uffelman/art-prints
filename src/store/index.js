
import { configureStore } from '@reduxjs/toolkit';
import {cartsReducer} from './slices/cartsSlice';
import {searchReducer} from './slices/searchSlice';
import { reviewReducer } from './slices/reviewsSlice';
import { historyReducer } from './slices/historySlice';
import { toastsReducer } from './slices/toastsSlice';

const store = configureStore({
    reducer: {
        cart: cartsReducer,
        search: searchReducer,
        reviews: reviewReducer,
        history: historyReducer,
        toasts: toastsReducer
    }
})

export { store };