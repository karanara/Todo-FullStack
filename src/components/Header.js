import { Link } from "react-router-dom";
import { useUserCredentials } from "./AuthContext";
const Header = ()=>{
    const authContext = useUserCredentials()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.logout()
    }

    return (
        <div>
            <div className="flex justify-between lg:bg-green-50">
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className="px-4">React-Todo Full Stack</li>
                        <li className="px-4">{isAuthenticated &&
                                     <Link  to="/welcome/ramya">Home</Link>}</li>
                        <li className="px-4"> {isAuthenticated 
                                            && <Link  to="/todos">Todos</Link>}  </li>
                        
                    </ul>
                    <ul className="flex items-center space-x-4">
  <li className="px-4">
    {!isAuthenticated && (
      <Link to="/login">
        Login
      </Link>
    )}
  </li>
  <li className="px-4">
    {isAuthenticated && (
      <Link  to="/logout" onClick={logout}>
        Logout
      </Link>
    )}
  </li>
</ul>

                    
                </div>

            </div>
        </div>
    )
};
export default Header;