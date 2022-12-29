import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../Button/MyButton";
import classes from "./NavBar.module.css";
const NavBar = function () {
    let activeStyle = {
        textDecoration: "underline",
        color: "red",
    };
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    return (
        <nav className={classes.NavBar}>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div>
                <NavLink
                    to="/Posts"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Posts
                </NavLink>
                <NavLink
                    to="/About"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
};
export default NavBar;
