import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export const ProtectedRoute:FC<{children:ReactNode}> = ({children}) =>{
    const {isAuthenticated, isLoading} = useAuth()

    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }

    if(!isAuthenticated)
        return <Navigate to={'/login'}/>
    return (
        <>{children}</>
    )
}