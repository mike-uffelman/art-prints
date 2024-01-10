import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index';
import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* wrop application with Redux provider for state access */}
            <App /> {/* start of content */}
        </Provider>
  </React.StrictMode>,
)
