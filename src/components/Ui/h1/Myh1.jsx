import React from "react";
import classes from "./Myh1.module.css";
const Myh1 = ({ children, ...props }) => {
    return (
        <h1 {...props} className={classes.myh1}>
            {children}
        </h1>
    );
};
export default Myh1;
