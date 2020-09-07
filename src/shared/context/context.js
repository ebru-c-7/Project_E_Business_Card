import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    pId: null,
    token: null,
    login : () => {},
    logout : () => {} 
});
