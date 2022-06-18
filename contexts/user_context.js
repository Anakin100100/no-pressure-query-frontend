import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
import { useRouter } from "next/router";

export const UserProvider = (props) => {
  const router = useRouter();

  const [token, setToken] = useState(() => {
    if (typeof window != "undefined") {
      const token = localStorage.getItem("noPressureQueryToken");
      if (token != undefined && token != "none") {
        console.log("Read token from localStorage");
        return token;
      } else {
        console.log("No token found in localStorage");
        return "none";
      }
    }
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (typeof window != "undefined") {
        const token = localStorage.getItem("noPressureQueryToken");
        console.log(token);

        if (token == "none" || token == undefined) {
          console.log("No token found in localStorage");
          if (
            //These are unprotected routes
            router.pathname !== "/login" &&
            router.pathname !== "/register" &&
            router.pathname !== "/"
          ) {
            router.push("/");
          }
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
