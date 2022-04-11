import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'

const SingUp = () => {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [conPass, setConPass] = useState({ value: '', error: '' })
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    if (user) {
        navigate('/login')
    }

    const nameHandler = e => {
        if (e.target.value === '') {
            setName({ value: '', error: "Name field can't be empty" })
        } else {
            setName({ value: e.target.value, error: '' })
        }
    }

    const emailHandler = e => {
        if (/\S+@\S+\.\S+/.test(e.target.value)) {
            setEmail({ value: e.target.value, error: '' })
        } else if (e.target.value === '') {
            setEmail({ value: e.target.value, error: "Email field can't be empty" })
        } else {
            setEmail({ value: '', error: 'invalid email' })
        }
    }

    const passwordHandler = e => {
        if (e.target.value.length < 8) {
            setPass({ value: '', error: 'Password require minimum 8 characters' })
        } else {
            setPass({ value: e.target.value, error: '' })
        }
    }

    const conPasswordHandler = e => {
        if (e.target.value.length < 8) {
            setConPass({ value: '', error: 'Password require minimum 8 characters' })
        } else if (pass.value !== e.target.value) {
            setConPass({ value: '', error: 'Password did not match' })
        } else {
            setConPass({ value: e.target.value, error: '' })
        }
    }

    const signUpHandler = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email.value, pass.value)
    }

    return (
        <div className="w-[500px] mx-auto my-10 shadow-lg rounded bg-orange-300">
            <p className="text-3xl text-center font-semibold pt-6">Please Register</p>
            <div className="flex justify-center mt-4">
                <form onSubmit={signUpHandler}>
                    <label className="block" htmlFor="email">
                        Name
                    </label>
                    <input
                        onBlur={nameHandler}
                        className="p-2 rounded outline-none w-[300px]"
                        type="text"
                        name="name"
                        required
                    />
                    <p className="text-red-800">{name.error && name.error}</p>
                    <label className="block" htmlFor="email">
                        Email
                    </label>
                    <input
                        onBlur={emailHandler}
                        className="p-2 rounded outline-none w-[300px]"
                        type="email"
                        name="email"
                        required
                    />
                    <p className="text-red-800">{email.error && email.error}</p>
                    <label className="block mt-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        onBlur={passwordHandler}
                        className="p-2 rounded outline-none w-[300px]"
                        type="password"
                        name="password"
                        required
                    />
                    <p className="text-red-800">{pass.error && pass.error}</p>
                    <label className="block mt-2" htmlFor="password">
                        Confirm Password
                    </label>
                    <input
                        onBlur={conPasswordHandler}
                        className="p-2 rounded outline-none w-[300px]"
                        type="password"
                        name="confirm-password"
                        required
                    />
                    <p className="text-red-800">{conPass.error && conPass.error}</p>
                    <p className="mt-1">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-700">
                            Login
                        </Link>
                    </p>
                    <input
                        className="block bg-gray-700 text-white py-3 px-10 my-5 mx-auto rounded"
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
        </div>
    )
}

export default SingUp
