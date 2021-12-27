import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Auth from './components/Auth'
import Landing from './components/Landing'
import RUAVet from './components/RUAVet'

import './styles.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/vet' element={<RUAVet />} />
        <Route exact path='/login' element={<Auth />} />
        <Route exact path='/signup' element={<Auth isSignUp='true' />} />
        <Route exact path='/vet-login' element={<Auth isVetAuth='true' />} />
        <Route exact path='/vet-signup' element={<Auth isSignUp='true' isVetAuth='true' />} />
      </Routes>
    </Router>
  )
}

export default App
