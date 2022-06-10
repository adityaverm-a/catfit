import React, { useState } from 'react'
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Loading from '../lotties/CheckLottie'


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
})

const Newsletter = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
          }, 2000)
    }

  return (
    <div className='newsletter'>
        <h3>Subscribe to our Newsletter</h3>
        <div className='newsletter-wrapper'>
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    values.email = ''
                    handleSubmit()
                }}
            >
            {({ errors }) => (
               <Form className="newsletter-wrapper__form">
                    <div className="form-group">
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
                    <div>
                        <button className='secondaryBtn'>Subscribe</button>
                    </div>
               </Form>
            )}
            </Formik>
            {loading && (<Loading />)}
        </div>
    </div>
  )
}

export default Newsletter