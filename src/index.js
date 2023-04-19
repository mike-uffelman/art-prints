import './routes/root.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux'
// import { NavProvider } from './context/navigation';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider> 
    </React.StrictMode>
)