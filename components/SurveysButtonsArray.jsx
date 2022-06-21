import React from "react";
import SurveyButton from "./SurveyButton";

const SurveysButtonsArray = () => {
  return (
    <div className="flex justify-around space-x-2">
      <SurveyButton name="New"></SurveyButton>
      <SurveyButton name="Filled by me"></SurveyButton>
      <SurveyButton name="Unfilled"></SurveyButton>
    </div>
  );
};

export default SurveysButtonsArray;
