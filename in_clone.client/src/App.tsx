import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./loginSignup/Login";
import Signup from "./loginSignup/Signup";
import { ToastContainer } from "react-toastify";
import UserContext from "./Context";
import Home from "./Components/Home/Home";

const App = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState<boolean>();
    const userId = localStorage.getItem("UserId");
    const userJwtToken = localStorage.getItem("JWTToken");
    console.log(userId, userJwtToken);

    useEffect(() => {
        if (!userJwtToken && !userId) {
            setIsLogin(false);
            navigate("/Login");
        }
        else {
            setIsLogin(true);
        }
    }, [userJwtToken])

    return (
        <>
            <UserContext.Provider value={{ isLogin }} >
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

export default App;