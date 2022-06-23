import React from "react";
import { useState } from "react";

const MySurveyListItem = (props) => {
  const [toggled, setToggled] = useState(false);

  if (toggled == true) {
    return (
      <div className="rounded-md bg-slate-300 px-2">
        <div className="flex flex-row justify-between">
          <div className="overflow-clip my-1 p-1">
            <span>{props.survey_name}</span>
          </div>
          <div>
            <button
              onClick={() => {
                setToggled(!toggled);
              }}
              className="ml-4 btn-primary rounded-md my-1 p-1"
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="rounded-md bg-slate-600 px-2">
        <div className="flex flex-row justify-between">
          <div className="overflow-clip my-1 p-1">
            <span>{props.survey_name}</span>
          </div>
          <div>
            <button
              onClick={() => {
                setToggled(!toggled);
              }}
              className="ml-4 btn-primary rounded-md my-1 p-1"
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MySurveyListItem;
