import React, { useEffect } from "react";
import { AuthContext } from "./context";
import { useState } from "react";
import RoutesMyApp from "./Routes/RoutesMyApp";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                isLoading,
            }}
        >
            <RoutesMyApp />
        </AuthContext.Provider>
    );
}

export default App;
