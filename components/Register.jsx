import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user_context";
import ErrorMessage from "./ErrorMessage";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);
  const router = useRouter();

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
      }),
    };

    const response = await fetch(
      "http://127.0.0.1:80/api/users",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`,
      };

      const response = await fetch(
        "http://127.0.0.1:80/api/token",
        requestOptions
      );
      const data = await response.json();
      console.log(data);

      setToken(data.access_token);
      localStorage.setItem("noPressureQueryToken", data.access_token);
      console.log("Token stored in local storage");
      router.push("/profile");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmationPassword && password.length > 5) {
      submitRegistration();
    } else {
      setErrorMessage(
        "Ensure that the passwords match and greater than 5 characters"
      );
    }
  };

  return (
    <div className="flex overflow-hidden justify-center items-center h-screen bg-yellow-500">
      <div className="flex flex-col bg-gray-200 border-2 border-gray-600 rounded-xl">
        <form className="p-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-center">Register</h1>
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
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input
                type="password"
                placeholder="Enter password"
                value={confirmationPassword}
                onChange={(e) => setConfirmationPassword(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                type="first_name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                type="last_name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <ErrorMessage message={errorMessage} />
          <br />
          <button className="button is-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
