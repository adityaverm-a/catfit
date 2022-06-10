import axios from 'axios'
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED } from './types';
import setAuthToken from '../utilis/setAuthToken';
import { errorAlert, successAlert } from './alert';

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
        const errorMsg = err.response.data.message

        // if(errorMsg){
        //     dispatch(errorAlert(errorMsg))
        // }

        dispatch({ type: AUTH_ERROR });
    }
}

export const userRegister = ({ firstName, lastName, email, password }, isVetAuth) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    var body

    if(isVetAuth) {
        body = JSON.stringify({ firstName, lastName, email, password, isVetAuth })
    } else {
        body = JSON.stringify({ firstName, lastName, email, password })
    }

    try {
        const res = await axios.post('/api/users', body, config)

        dispatch({ type: REGISTER_SUCCESS, payload: res.data })

        dispatch(loadUser())
    } catch (err) {
        const errorMsg = err.response.data.message

        if(errorMsg){
            dispatch(errorAlert(errorMsg))
        }

        dispatch({ type: REGISTER_FAIL })
    }
}

export const userLogin = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config)

        dispatch({ type: LOGIN_SUCCESS, payload: res.data })

        loadUser()
    } catch (err) {
        const errorMsg = err.response.data.message

        if(errorMsg){
            dispatch(errorAlert(errorMsg))
        }

        dispatch({ type: LOGIN_FAIL })
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}
