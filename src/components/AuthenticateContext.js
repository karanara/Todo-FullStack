import { Navigate } from "react-router-dom";
import { useUserCredentials } from "./AuthContext"

const AuthenticateContext = ({children})=>{
    const authContext = useUserCredentials();
    if(authContext.isAuthenticated){
        return children
    }
    return <Navigate to="/"/>
}
export default AuthenticateContext;