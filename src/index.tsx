import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App'
import './styles/index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider> 
            <HashRouter>
                <App />
            </HashRouter>
        </HelmetProvider>
    </React.StrictMode>
)