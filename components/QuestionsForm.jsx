import { useState, React, useContext } from "react";
import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../contexts/user_context";
import { SurveyContext } from "../contexts/survey_context";
import { useRouter } from "next/router";

const QuestionsForm = () => {
  const [questionType, setQuestionType] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [error, setError] = useState("");
  const [token, ,] = useContext(UserContext);
  const [survey, ,] = useContext(SurveyContext);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitRegistration();
  };

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        question_type: questionType,
        question_text: questionText,
      }),
    };

    const response = await fetch(
      `${process.env.BACKEND}/survey_questions/create?survey_id=${survey.id}`,
      requestOptions
    );
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      setError(data.detail);
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1 className="font-bold">Create Question</h1>
      <div className="field">
        <label className="label">Question text</label>
        <div className="control">
          <input
            placeholder="Enter the question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="input"
            required
          />
        </div>
      </div>
      <div className="field space-y-1 flex-col">
        <label className="label">Question type</label>
        <div className="flex flex-row mt-2">
          <div>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-accent"
              onClick={(e) => setQuestionType(1)}
            />
          </div>
          <div>
            <p className="ml-2">Single choice question</p>
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-accent"
              onClick={(e) => setQuestionType(2)}
            />
          </div>
          <div>
            <p className="ml-2">Multiple choice question</p>
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-accent"
              onClick={(e) => setQuestionType(3)}
            />
          </div>
          <div>
            <p className="ml-2">Text-question</p>
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <input
              type="radio"
              name="radio-3"
              className="radio radio-accent"
              onClick={(e) => setQuestionType(4)}
            />
          </div>
          <div>
            <p className="ml-2">Weighted ranking</p>
          </div>
        </div>
      </div>
      <ErrorMessage message={error} />
      <button className="button is-primary" type="submit">
        Create question
      </button>
    </form>
  );
};

export default QuestionsForm;
