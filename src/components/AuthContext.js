import React, { createContext, useContext, useState } from "react";
import { basicAuthToken } from "../api/TodoApiService";
import { apiClientCall } from "../api/apiClientCall";

export const UserContext = createContext();
export const useUserCredentials = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserCredentials must be used within a UserContext.Provider");
  }
  return context;
};

const AuthContext = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userName,setUserName] = useState(null)
  const [token,setToken]=useState(null)

    const loginPage = async(userName, password) => {    
     try {
      const baToken = 'Basic ' + window.btoa( userName + ":" + password )
      const response = await basicAuthToken(baToken)
      if(response.status===200){
       setAuthenticated(true)
       setUserName(userName)
       setToken(baToken)
       apiClientCall.interceptors.request.use(
                     (config) => {
                     console.log('intercepting and adding a token')
                     config.headers.Authorization = baToken
                       return config
                       }
             )
    
       return true
      }
      else{
       logout()
       return false
      }
    }
  catch (error){
       logout()
       return false
    }
  }

 /* const loginPage = (userName, password) => {
    if (userName === "ramya" && password === "ramya123@") {
      setAuthenticated(true);
      setUserName(userName)
      return true;
    } else {
      setAuthenticated(false);
      setUserName(null)
      return false;
    }
  };*/

  const logout = () => {
    setAuthenticated(false);
    setUserName(null)
    setToken(null)
  };

  return (
    <UserContext.Provider value={{ loginPage, isAuthenticated, logout,userName,token}}>
      {children}
    </UserContext.Provider>
  );
  };

export default AuthContext;
