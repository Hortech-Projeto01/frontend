import React, {
  createContext,
  useReducer,
  useCallback,
  useMemo,
  useContext,
} from "react";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";

const TOKEN_STORAGE_NAME = "ht-token";

const getInitialToken = () => {
  const token = localStorage.getItem(TOKEN_STORAGE_NAME) ?? undefined;
  const { user } = token ? jwt_decode(token) : {};
  return { token, user, isLogged: !!user };
};

const initialState = getInitialToken();

const AuthContext = createContext(initialState);

const authReducer = (_, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { user } = action.token ? jwt_decode(action.token) : {};
      localStorage.setItem(TOKEN_STORAGE_NAME, action.token);
      return {
        user,
        token: action.token,
        isLogged: true,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem(TOKEN_STORAGE_NAME);
      return {
        user: undefined,
        token: undefined,
        isLogged: false,
      };
    }
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(
    (token) => {
      dispatch({
        type: "LOGIN",
        token,
      });
    },
    [dispatch]
  );

  const logout = useCallback(() => dispatch({ type: "LOGOUT" }), [dispatch]);

  const value = useMemo(
    () => ({
      ...state,
      login,
      logout,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={value} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Must be inside AuthContext");
  }
  return context;
};
