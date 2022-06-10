import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { userRegister } from '../../actions/auth';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().transform(x => x === '' ? undefined : x).concat(Yup.string().required('Password is required')).min(6, 'Password must be at least 6 characters').max(50, 'Too Long!'),
    confirmPassword: Yup.string().transform(x => x === '' ? undefined : x).when('password', (password, schema) => {
            if (password) return schema.required('Confirm Password is required')
    }).oneOf([Yup.ref('password')], 'Passwords must match')
})

const Register = ({ setAuthState, isVetAuth, demoLogin }) => {   
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = async (formState) => {
        setLoading(true)
        console.log('laoding!!', loading);
        dispatch(userRegister(formState, isVetAuth))

        setTimeout(() => {
            setLoading(false)
        }, 50000)
        console.log('laoding!!', loading);

    }
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => handleSubmit(values)}
            >
                {({ errors, isSubmitting }) => (
                    <Form className='auth-form'>
                        <h2>Sign Up</h2>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field
                                name="confirmPassword"
                                type={showPassword ? 'text' : 'password'}                        placeholder="Confirm Password"
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                                <ErrorMessage name="confirmPassword" />
                            </div>
                        </div>
                        <div className="form-action form-group">
                            <p>
                                Already have an Account?
                                <Link
                                    className="btn-link" 
                                    disabled={isSubmitting}
                                    onClick={() => setAuthState(false)}
                                    to={isVetAuth ? '/vet-login' : '/login'} 
                                >
                                    Login
                                </Link>
                            </p>
                            <button 
                                type="submit"  
                                // disabled={isSubmitting}
                                className="secondaryBtn"
                            >
                                Register
                            </button>
                        </div>
                        <div className='demo-login'>
                            <div className='demo-login-text'>
                                <h6>Or</h6>
                            </div>
                            <button
                                disabled={isSubmitting}
                                className="secondaryBtn"
                                onClick={demoLogin}
                            >
                                Login as a Demo User?
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Register