import React, { createContext, useEffect, useState } from "react";
export const SurveyContext = createContext();

export const SurveyProvider = (props) => {
  const [survey, setSurvey] = useState({});

  useEffect(() => {
    console.log("survey is");
    console.log(survey);
  }, [survey]);

  return (
    <SurveyContext.Provider value={[survey, setSurvey]}>
      {props.children}
    </SurveyContext.Provider>
  );
};
