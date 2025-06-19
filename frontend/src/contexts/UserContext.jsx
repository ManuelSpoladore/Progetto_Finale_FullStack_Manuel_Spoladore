import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { getToken, removeToken } from "../utils/tokenStorage";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/get-user-profile.php`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          removeToken();
          setUser(null);
        }
      })
      .catch(() => {
        removeToken();
        setUser(null);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
