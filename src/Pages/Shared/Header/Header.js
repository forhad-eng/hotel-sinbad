import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <nav>
            <ul className="flex justify-end gap-5 py-5 px-10 text-xl font-semibold bg-gray-200">
                <li className="hover:text-orange-700 mr-auto">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-500' : 'black')}>
                        Home
                    </NavLink>
                </li>
                <li className="hover:text-orange-700">
                    <NavLink to="/rooms" className={({ isActive }) => (isActive ? 'text-orange-500' : 'black')}>
                        Rooms
                    </NavLink>
                </li>
                <li className="hover:text-orange-700">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-orange-500' : 'black')}>
                        About Us
                    </NavLink>
                </li>
                <li className="hover:text-orange-700">
                    {user ? (
                        <button onClick={() => signOut(auth)} className="outline-none bg-red-500 px-2 rounded">
                            Logout
                        </button>
                    ) : (
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-orange-500' : 'black')}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Header
