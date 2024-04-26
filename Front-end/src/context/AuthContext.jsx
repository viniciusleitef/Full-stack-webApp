import React, {createContext, useEffect, useState} from "react";
import { useApi } from "../hooks/useApi";

export const AuthContext = createContext()

export const AuthProvider =  ({children}) =>{
    const [auth, setAuth] = useState(()=>{
        const localData = localStorage.getItem("auth")
        return localData ? localData : ""
    })
    const [error, setError] = useState("")
    const api = useApi()

    const login = async (data) => {
        const response = await api.login(data)
        console.log(response.data)
        if(response.data.token){                            
            setAuth(response.data.token)
            localStorage.setItem("auth", response.data.token)
            return true
        }
        setError(response.data.detail)
        return false
    }

    const logout = () => {
        setAuth("")
        localStorage.setItem("auth", "")
    }

    const userPersistence = (token) => {
        const dateNow = new Date(Date.now())
        const expirationDate = new Date(token.expiration_time)
        
        if(dateNow >= expirationDate){
            return false
        }

        return true
    }
    

    return(
        <AuthContext.Provider value={{auth, error, setAuth, login, logout, userPersistence}}>
            {children}
        </AuthContext.Provider>
    )
}
