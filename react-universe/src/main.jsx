import React from 'react'
import ReactDOM from 'react-dom/client'
import { UniverseLanding } from './UniverseApp.jsx'
import './Styles/Home.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UniverseLanding />
    </BrowserRouter>
  </React.StrictMode>
)
