import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children, initialLoggedInUser }) => {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
