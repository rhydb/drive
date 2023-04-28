import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}