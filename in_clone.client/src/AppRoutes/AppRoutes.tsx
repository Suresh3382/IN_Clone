import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Profile from '../Components/Profile/Profile'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes