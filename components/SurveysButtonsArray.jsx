import React from "react";
import SurveyButton from "./SurveyButton";

const SurveysButtonsArray = () => {
  return (
    <div className="flex justify-around space-x-2">
      <SurveyButton name="New" link="/surveys/new_survey"></SurveyButton>
      <SurveyButton name="Filled by me" link="/surveys/mine"></SurveyButton>
      <SurveyButton name="Unfilled" link="/surveys/unfilled"></SurveyButton>
    </div>
  );
};

export default SurveysButtonsArray;
