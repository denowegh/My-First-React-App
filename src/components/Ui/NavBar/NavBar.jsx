import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = function () {
    let activeStyle = {
        textDecoration: "underline",
        color: "red",
    };

    return (
        <nav className={classes.NavBar}>
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Home
            </NavLink>

            <NavLink
                to="/About"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                About
            </NavLink>

            <NavLink
                to="/Posts"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Posts
            </NavLink>
        </nav>
    );
};
export default NavBar;
