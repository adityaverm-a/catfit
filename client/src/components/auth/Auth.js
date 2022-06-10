import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import Register from './Register'
import Login from './Login'

import AuthImgSrc from '../../images/Auth.png'
import VetAuthImgSrc from '../../images/VetAuth.png'
import { userLogin } from '../../actions/auth';

function Auth ({ isSignUp, isVetAuth }) {
    const { isAuthenticated } = useSelector(({ auth }) => ({ isAuthenticated: auth.isAuthenticated }))

    const [authState, setAuthState] = useState(isSignUp)

    const dispatch = useDispatch()

    const demoLogin = async () => {
        var formData

        if(isVetAuth) {
            formData = {
                email: 'drstrange@gmail.com',
                password: 'strange'
            }
        } else {
            formData = {
                email: 'imnotcatwoman@gmail.com',
                password: 'brucie'
            }
        }

        dispatch(userLogin(formData))
    }

    return (
        <>
            {isAuthenticated ? 
                (
                    <Redirect to='/dashboard' />
                ) : (
                    <div className='auth_container'>
                        <div className='auth_container-form'>
                        {authState ? 
                            (
                                <Register
                                    setAuthState={setAuthState} 
                                    demoLogin={demoLogin}
                                    isVetAuth={isVetAuth} 
                                />
                            ) : (
                                <Login 
                                    setAuthState={setAuthState} 
                                    demoLogin={demoLogin}
                                    isVetAuth={isVetAuth} 
                                />
                            )
                        }
                        </div>
                        <div className='auth_container-img'>
                            <img src={isVetAuth ? VetAuthImgSrc : AuthImgSrc} alt="cat.fit auth" />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Auth