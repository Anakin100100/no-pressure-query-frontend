import React, { createContext, useEffect, useState } from "react";
import { Configuration, DefaultApi } from "../client";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(() => {
    if (typeof window != "undefined") {
      localStorage.getItem("noPressureQueryToken");
      console.log("Reading token from localStorage");
    }
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (typeof window != "undefined") {
        const token = localStorage.getItem("noPressureQueryToken");
        console.log(token);
        if (token == "null") {
          console.log("No token found in localStorage");
        } else {
          console.log("Token found in localStorage");
        }
      }
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
