import React, {createContext, useEffect, useState} from "react";
import {  Configuration, DefaultApi } from "../client"

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(
        () => {
            if(typeof window != 'undefined') {
                localStorage.getItem("noPressureQueryToken")
                console.log("Reading token from localStorage")
            }
        }
    )

    useEffect(() => {
        const fetchUser = async () => {
            const config = new Configuration()
            const api = new DefaultApi(config)

            const response = await api.readUserReturnTokenUsersMeGet
            if (response["id"] == undefined) {
                localStorage.setItem("noPressureQueryToken", null)
                console.log("Setting token to null")
            }

            if(typeof window === 'undefined') {
                localStorage.setItem("noPressureQueryToken", response.access_token)
                console.log("Token stored in local storage")
            }
        };
        fetchUser();
    }, [token])

    return (
        <UserContext.Provider value={[token, setToken]}>
            {props.children}
        </UserContext.Provider>
    )
}
