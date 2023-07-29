import { createContext, useContext, useState } from "react"
import jwt from 'jsonwebtoken'


const AuthContext = createContext()
const base_url = process.env.NEXT_PUBLIC_API_URL
const token_url = `${base_url}/api/token/`

// Custom hook to access the AuthContext
export function useAuth() {
    const auth = useContext(AuthContext); // Accessing the AuthContext using the useContext hook

    if (!auth) {
        // If the AuthContext is not available, i.e., the component using this hook is not wrapped within an AuthProvider
        // Return an error message to guide developers to use this hook within an AuthProvider
        return ("useAuth must be used within an AuthProvider");
    }

    // If the AuthContext is available, return the auth object, which holds authentication-related data
    return auth;
}


// This is a custom authentication provider component that wraps its children with the AuthContext.
// The AuthContext allows its children to access authentication-related data and functions.
export function AuthProvider(props) {


    const [state, setState] = useState({
        token: null,
        user: null,
        login,
        logout
    });

    async function login(username, password) {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }
        const response = await fetch(token_url, options)
        const data = await response.json()
        const decoded = jwt.decode(data.access)
        const new_state = {
            token: data,
            user: {
                username: decoded.username,
                email: decoded.email,
            }
        }
        setState(prevState=>({...prevState, ...new_state}));
    }
    function logout() {
        const new_state = {
            token: null,
            user: null
        };
        setState(prevState => ({ ...prevState, ...new_state }));
    }
    
    return (
        // The AuthContext.Provider is a special component that provides a value to all its descendants.
        // In this case, we are providing an empty string ("") as the value to the AuthContext.
        // Replace "" with the actual authentication state or functions you want to provide.
        <AuthContext.Provider value={state}>
            {/* The children of the AuthProvider will have access to the authentication context */}
            {props.children}
        </AuthContext.Provider>
    );
}
