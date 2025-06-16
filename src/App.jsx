import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'

// Composant principal qui encapsule le routeur
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
