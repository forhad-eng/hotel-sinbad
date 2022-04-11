import { Route, Routes } from 'react-router-dom'
import CheckOut from './Pages/Home/CheckOut/CheckOut'
import Home from './Pages/Home/Home'
import Login from './Pages/Home/Login/Login'
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth'
import SingUp from './Pages/Home/SingUp/SingUp'
import Header from './Pages/Shared/Header/Header'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <CheckOut />
                        </RequireAuth>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
