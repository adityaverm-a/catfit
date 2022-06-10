import { Formik, Field, Form, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { IoIosEye, IoMdEyeOff } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import { userLogin } from '../../actions/auth'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().transform(x => x === '' ? undefined : x).concat(Yup.string().required('Password is required')).min(6, 'Password must be at least 6 characters').max(50, 'Too Long!'),
})

const Login = ({ setAuthState, isVetAuth, demoLogin }) => {  
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = (formState) => {
        dispatch(userLogin(formState))
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => handleSubmit(values)}
            >
                {({ errors, isSubmitting }) => (
                    <Form className='auth-form'>
                        <h2>Sign In</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className={`form-control password-input ${errors.password ? 'is-invalid' : ''}`}>
                                <Field
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}                           placeholder="Password"
                                    className='form-control-password'
                                />
                                {showPassword ? (
                                    <IoMdEyeOff
                                        className='visible-btn'
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <IoIosEye
                                        className='visible-btn'
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            <div className="invalid-feedback">
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <div className="form-action form-group">
                            <p>
                                Don't have an Account?
                                <Link
                                    className="btn-link" 
                                    onClick={() => setAuthState(true)}
                                    to={isVetAuth ? '/vet-signup' : '/signup'} 
                                >
                                    Register
                                </Link>
                            </p>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="secondaryBtn"
                            >
                                Login
                            </button>
                        </div>
                        <div className='demo-login'>
                            <div className='demo-login-text'>
                                <h6>Or</h6>
                            </div>
                            <button disabled={isSubmitting} className="secondaryBtn" onClick={demoLogin}>
                                Login as a Demo User?
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Login