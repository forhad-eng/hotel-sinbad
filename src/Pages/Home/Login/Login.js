import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'

const Login = () => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [signInWithEmailAndPassword, user, , error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
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

    const loginHandler = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email.value, pass.value)
    }

    return (
        <div className="w-[500px] mx-auto my-10 shadow-lg rounded bg-orange-300">
            <p className="text-3xl text-center font-semibold pt-6">Please Login</p>
            <div className="flex justify-center mt-4">
                <form onSubmit={loginHandler}>
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
                    <p className="text-red-800">{error && error.message}</p>
                    <p className="mt-1">
                        New user?{' '}
                        <Link to="/signup" className="text-blue-700">
                            Create an account
                        </Link>
                    </p>
                    <input
                        className="block bg-gray-700 text-white py-3 px-10 my-5 mx-auto rounded"
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login
