// React, Redux 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store/index';

// import components
import App from './App';

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