import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Profile from '../Components/Profile/Profile'
import UserContext from '../Context'

const AppRoutes = () => {
    const { isLogin } = useContext<any>(UserContext);
    return (
        <div>
            <Routes>
                <Route path="/" element={isLogin ? <Home /> : <Navigate to={"/Login"} />} />
                <Route path="/search" element={isLogin ? <Search /> : <Navigate to={"/Login"} />} />
                <Route path='/profile' element={isLogin ? <Profile /> : <Navigate to={"/Login"} />} />
            </Routes>
        </div>
    )
}

export default AppRoutes