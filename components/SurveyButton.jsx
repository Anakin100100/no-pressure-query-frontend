import React from "react";

const SurveyButton = (props) => {
  return (
    <button className="text-lg bg-blue-300 rounded-lg border-2 border-blue-500 block w-full">
      {props.name}
    </button>
  );
};

export default SurveyButton;
