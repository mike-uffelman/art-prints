import './routes/root.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux'
// import { NavProvider } from './context/navigation';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

// define the base root for react application
root.render(
    <React.StrictMode>
        <Provider store={store}> {/* wrop application with Redux provider for state access */}
            <App /> {/* start of content */}
        </Provider> 
    </React.StrictMode>
)