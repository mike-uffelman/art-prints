import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
// import { store as storeReducers } from './store'
import { historyReducer } from './store/slices/historySlice'
import { cartsReducer } from './store/slices/cartsSlice'
import { reviewReducer } from './store/slices/reviewsSlice'
import { searchReducer } from './store/slices/searchSlice'
import { toastsReducer } from './store/slices/toastsSlice'


const setupStore = preloadedState => {
  return configureStore({ 
    reducer: {
        cart: cartsReducer,
        search: searchReducer,
        reviews: reviewReducer,
        history: historyReducer,
        toasts: toastsReducer
    }, preloadedState
   })
}

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}