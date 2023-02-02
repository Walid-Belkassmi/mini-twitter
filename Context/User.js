import { createContext, useEffect, useState } from "react";
import { User } from "../API/User";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUserWithToken();
  }, [token]);

  const setUserWithToken = async () => {
    if (token) {
      getUser();
    }
  };

  const getUser = async () => {
    const userResponse = await User(token);
    setUser(userResponse);
  };

  const logout = async () => {
    setUser(null);
  };

  const value = {
    setToken,
    user,
    logout,
    setUser,
    token,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
