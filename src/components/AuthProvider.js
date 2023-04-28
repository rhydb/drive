import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";
import { useMemo } from "react";

export const AuthProvider = () => {
    const [token, setToken] = useLocalStorage("token"); 
    const value = useMemo(() => ({ token, setToken }), [token, setToken])

    return (
        <AuthContext.Provider value={value}>
            <Outlet />
        </AuthContext.Provider>
    )
}