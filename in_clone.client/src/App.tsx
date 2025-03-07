import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./loginSignup/Login";
import Signup from "./loginSignup/Signup";
import { ToastContainer } from "react-toastify";
import UserContext from "./Context";
import { jwtTokenExpire } from "./Utils/tokenExpire";

const App = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const userId = localStorage.getItem("UserId");
    const userJwtToken = localStorage.getItem("JWTToken");

    useEffect(() => {
        if (!userJwtToken || jwtTokenExpire(userJwtToken)) {
            localStorage.removeItem("JWTToken");
            localStorage.removeItem("UserId");
            setIsLogin(false);
            navigate("/Login");
        } else {
            setIsLogin(true);
        }
    }, [userJwtToken, navigate]);

    return (
        <>
            <UserContext.Provider value={{ isLogin, setIsLogin, userId, userJwtToken }}>
                {isLogin && <Layout />}
                <ToastContainer />
                <Routes>
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                </Routes>
            </UserContext.Provider>
        </>
    );
};

export default App