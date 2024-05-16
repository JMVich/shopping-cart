import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarroApp } from './CarroApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <CarroApp />
        </React.StrictMode>
    </BrowserRouter>
)
