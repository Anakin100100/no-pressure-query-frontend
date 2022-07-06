import React from "react";
import MySurveyListItem from "./MySurveyListItem";

const MySurveysTable = (props) => {
  console.log(props);

  return (
    <div className="flex-col space-y-1">
      {props.data.map((survey, index) => (
        <MySurveyListItem survey_name={survey.name} key={index} />
      ))}
    </div>
  );
};

export default MySurveysTable;
