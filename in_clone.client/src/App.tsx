import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout/Layout'
import Login from './loginSignup/Login'

const App = () => {
    return (
        <Router>
            <Login />
            {/* <Layout /> */}
        </Router>
    )
}

export default App