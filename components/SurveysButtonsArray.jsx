import React from "react";
import SurveyButton from "./SurveyButton";

const SurveysButtonsArray = () => {
  return (
    <div className="flex justify-around space-x-2">
      <SurveyButton name="New" link="/surveys/new_survey"></SurveyButton>
      <SurveyButton
        name="Filled by me"
        link="/surveys/my_filled_surveys"
      ></SurveyButton>
      <SurveyButton
        name="Unfilled"
        link="/surveys/my_unfilled_surveys"
      ></SurveyButton>
      <SurveyButton
        name="Created by me"
        link="/surveys/my_surveys"
      ></SurveyButton>
    </div>
  );
};

export default SurveysButtonsArray;
