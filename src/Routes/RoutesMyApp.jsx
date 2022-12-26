import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "../components/Ui/NavBar/NavBar";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
function RoutesMyApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Posts" element={<Posts />} />
                <Route path="/" element={<Posts />} />
                <Route path="/Error" element={<Error />} />
                <Route path="*" element={<Navigate to="/Error" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesMyApp;
