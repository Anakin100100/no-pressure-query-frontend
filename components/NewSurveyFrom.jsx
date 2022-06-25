import { useState, React, useContext } from "react";
import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../contexts/user_context";
import { useRouter } from "next/router";

const NewSurveyFrom = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [token, ,] = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      submitRegistration();
    } else {
      setError("Name cannot be blank");
    }
  };

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
      }),
    };

    const response = await fetch(
      `${process.env.BACKEND}/surveys/create`,
      requestOptions
    );
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      setError(data.detail);
    } else {
      router.push("/surveys/my_surveys");
    }
  };

  return (
    <div className="flex flex-col bg-gray-200 border-2 border-gray-600 rounded-xl justify-center">
      <form className="p-4" onSubmit={handleSubmit}>
        <h1 className="font-bold">Create Survey</h1>
        <div className="field">
          <label className="label">Survey name</label>
          <div className="control">
            <input
              placeholder="Enter the survey name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        <ErrorMessage message={error} />
        <button className="button is-primary" type="submit">
          Create Survey
        </button>
      </form>
    </div>
  );
};

export default NewSurveyFrom;
