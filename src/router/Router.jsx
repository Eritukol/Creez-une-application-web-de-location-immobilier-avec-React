import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Importation des composants de page
import Home from '../pages/Home'
import About from '../pages/About'
import Housing from '../pages/Logement'
import Error404 from '../pages/Error404'

// Importation des composants communs
import Header from '../components/Header'
import Footer from '../components/Footer'

// Centralisation des routes et composants communs
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/logement/:id' element={<Housing />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Router
