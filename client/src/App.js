import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toast'

import setAuthToken from './utilis/setAuthToken'
import Auth from './components/auth/Auth'
import Landing from './components/landingPage/Landing'
import RUAVet from './components/landingPage/RUAVet'
import Dashboard from './components/dashboard'

import { loadUser } from './actions/auth'
import { Provider } from 'react-redux'
import store from './store'

import './styles.css'
import Chat from './components/chat'


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/vet' component={RUAVet} />
          <Route exact path='/login' component={Auth} />
          <Route exact path='/signup'>
            <Auth isSignUp='true' />
          </Route>
          <Route exact path='/vet-login'>
            <Auth isSignUp='true' />
          </Route>
          <Route exact path='/vet-signup'>
            <Auth isSignUp='true' isVetAuth='true' />
          </Route>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/chat' component={Chat} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Switch>
      </Router>
      <ToastContainer position='top-right' />
    </Provider>
  )
}

export default App
