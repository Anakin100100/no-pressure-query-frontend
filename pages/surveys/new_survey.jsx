import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });
import NewSurveyFrom from "../../components/NewSurveyFrom";

const new_survey = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <Navbar />
      <div className="flex m-2 bg-gray-200 rounded-2xl border-gray-700 border-2 p-4 flex-grow justify-center items-center">
        <div>
          <NewSurveyFrom></NewSurveyFrom>
        </div>
      </div>
    </div>
  );
};

export default new_survey;
