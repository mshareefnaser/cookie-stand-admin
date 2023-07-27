import { createContext} from "react"


const AuthContext = createContext()
export function Authprovider(props) {
    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}