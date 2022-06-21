import React from "react";
import MySurveyListItem from "./MySurveyListItem";

const MySurveysList = () => {
  return (
    <div className="mt-2">
      <h1 className="text-xl">My surveys:</h1>
      <div className="flex-col space-y-1">
        <MySurveyListItem survey_name="test_1 aaaaaaaaa aaaa aaaaaa aaaaaa aaaaaaa aaaaaaaa" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
        <MySurveyListItem survey_name="test_1" />
      </div>
    </div>
  );
};

export default MySurveysList;
