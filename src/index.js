import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux'

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)