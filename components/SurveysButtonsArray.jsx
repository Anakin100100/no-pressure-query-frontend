import React from "react";
import SurveyButton from "./SurveyButton";

const SurveysButtonsArray = () => {
  return (
    <div className="flex space-x-2 md:space-x-24">
      <SurveyButton name="New" link="/surveys/new_survey"></SurveyButton>
      <SurveyButton
        name="Filled by me"
        link="/surveys/my_filled_surveys"
      ></SurveyButton>
      <SurveyButton
        name="Unfilled"
        link="/surveys/my_unfilled_surveys"
      ></SurveyButton>
      <SurveyButton name="Created by me" link="/surveys/main"></SurveyButton>
    </div>
  );
};

export default SurveysButtonsArray;
