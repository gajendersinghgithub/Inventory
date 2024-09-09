import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const intitalAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser]=useState(
        intitalAuthUser? JSON.parse(intitalAuthUser) : undefined
    );
    return (
        <AuthContext.Provider value={[ authUser, setAuthUser ]  } >
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);