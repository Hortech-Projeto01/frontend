import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    //gerando alguma string para fingir que é um hash
    let token = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    sessionStorage.setItem("authCode",token);
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    sessionStorage.removeItem("authCode");
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  //verifiacacao temporaria se ja existe localstorage
  const [user, setUser] = sessionStorage.getItem("authCode") || useState(null);
  
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

ProvideAuth.propTypes = {
  children: PropTypes.element,
  };