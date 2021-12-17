import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from './components/Landing'
import RUAVet from './components/RUAVet'

import './styles.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/vet' element={<RUAVet />} />
      </Routes>
    </Router>
  )
}

export default App
