import React, { useContext } from "react";
import MyButton from "../components/Ui/Button/MyButton";
import Myh1 from "../components/Ui/h1/Myh1";
import MyInput from "../components/Ui/Input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    };
    return (
        <div>
            <Myh1>Страница для логина</Myh1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"></MyInput>
                <MyInput type="password" placeholder="Введите пароль"></MyInput>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
