import React, { createContext, useContext, useState } from "react";

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

  const loginPage = (userName, password) => {
    if (userName === "ramya" && password === "ramya123@") {
      setAuthenticated(true);
      setUserName(userName)
      return true;
    } else {
      setAuthenticated(false);
      setUserName(null)
      return false;
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ loginPage, isAuthenticated, logout,userName}}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
