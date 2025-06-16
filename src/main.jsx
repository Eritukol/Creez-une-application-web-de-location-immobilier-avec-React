import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Importation des styles globaux en SCSS
import './styles/index.scss'

// Point d'entrée principal de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
