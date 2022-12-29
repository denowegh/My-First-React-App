import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "../components/Ui/NavBar/NavBar";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Post from "../pages/Post";
import { privateRoutes, publicRoutes } from ".";
import { AuthContext } from "../context";
import Loader from "../components/Ui/Loader/Loader";
function RoutesMyApp() {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <Loader />;
    }
    return isAuth ? (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {privateRoutes.map((e) => (
                    <Route element={e.element} path={e.path} key={e.path} />
                ))}
                <Route path="*" element={<Navigate to="/Posts" replace />} />
            </Routes>
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <NavBar />

            <Routes>
                {publicRoutes.map((e) => (
                    <Route element={e.element} path={e.path} key={e.path} />
                ))}
                <Route path="*" element={<Navigate to="/Login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesMyApp;
