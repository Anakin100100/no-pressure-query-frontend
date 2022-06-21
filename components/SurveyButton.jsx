import React from "react";

const SurveyButton = (props) => {
  return (
    <button className="py-2 text-2xl bg-blue-300 rounded-lg border-2 border-blue-500 block w-full mx-2">
      {props.name}
    </button>
  );
};

export default SurveyButton;
