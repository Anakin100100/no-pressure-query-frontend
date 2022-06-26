import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user_context";
import ErrorMessage from "./ErrorMessage";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);
  const router = useRouter();

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`,
    };

    const response = await fetch(
      `${process.env.BACKEND}/api/token`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    localStorage.setItem("noPressureQueryToken", data.access_token);
    setToken(data.access_token);
    console.log("Token stored in local storage");
    router.push("/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <div className="flex overflow-hidden justify-center items-center h-screen bg-yellow-500">
      <div className="flex flex-col bg-gray-200 border-2 border-gray-600 rounded-xl">
        <form className="p-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-center">Login</h1>
          <div className="w-">
            <label className="label">Email Address</label>
            <div className="control">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <ErrorMessage message={errorMessage} />
          <br />
          <button className="button is-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
