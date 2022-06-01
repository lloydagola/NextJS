import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuth = (Component) => {
  return (props) => {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

    return (
      <Component
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        {...props}
      />
    );
  };
};

export default withAuth;
