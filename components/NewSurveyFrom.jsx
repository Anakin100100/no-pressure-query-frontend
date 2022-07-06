import { useState, React, useContext } from "react";
import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../contexts/user_context";
import { useRouter } from "next/router";
import { SurveyContext } from "../contexts/survey_context";
import { useEffect } from "react";
import MySurveyListItem from "./MySurveyListItem";

const NewSurveyFrom = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [token, ,] = useContext(UserContext);
  const [survey, setSurvey] = useContext(SurveyContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      submitRegistration();
    } else {
      setError("Name cannot be blank");
    }
  };

  const submitRegistration = async (set) => {
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

    setSurvey(data);
    console.log(survey);

    if (!response.ok) {
      setError(data.detail);
    }
  };

  if (Object.keys(survey).length === 0) {
    return (
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
    );
  } else {
    return <MySurveyListItem survey_name={survey.name} className="m-1" />;
  }
};

export default NewSurveyFrom;
