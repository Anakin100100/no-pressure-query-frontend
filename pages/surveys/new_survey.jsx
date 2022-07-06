import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });
import NewSurveyFrom from "../../components/NewSurveyFrom";
import SurveysButtonsArray from "../../components/SurveysButtonsArray";
import QuestionsForm from "../../components/QuestionsForm";

const new_survey = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <Navbar />
      <div className="flex-col m-2 bg-gray-200 rounded-2xl border-gray-700 border-2 p-4 flex-grow">
        <SurveysButtonsArray />
        <div className="flex p-4 flex-grow justify-center items-center">
          <div className="flex flex-col bg-gray-200 border-2 border-gray-600 rounded-xl justify-center">
            <NewSurveyFrom></NewSurveyFrom>
            <QuestionsForm></QuestionsForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default new_survey;
