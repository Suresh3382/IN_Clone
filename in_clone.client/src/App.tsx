import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./loginSignup/Login";
import Signup from "./loginSignup/Signup";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <Router>
                <ToastContainer />
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/' element={<Layout />} />
            </Routes>
        </Router>
    );
};

export default App;