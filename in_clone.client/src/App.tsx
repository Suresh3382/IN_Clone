import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./loginSignup/Login";
import Signup from "./loginSignup/SIgnup";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/*' element={<Layout />} />
            </Routes>
        </Router>
    );
};

export default App;