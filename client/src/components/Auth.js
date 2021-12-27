import React from 'react'
import { useForm } from 'react-hook-form'

const Auth = ({ isSignup, isVetAuth }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    return (
        <div className='auth_container'>
            <div className='auth_container-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("First Name")} />
                </form>
            </div>
            <div className='auth_container-img'></div>
        </div>
    )
}

export default Auth
