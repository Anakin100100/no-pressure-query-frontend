import React from "react";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/user_context";
import MySurveysTable from "./MySurveysTable";
import LoadingSpinner from "./LoadingSpinner";

const MySurveysList = () => {
  const [isLoadingAndData, setIsLoadingAndData] = useState({
    isLoading: true,
    data: [],
  });
  const [token, ,] = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(
        `${process.env.BACKEND}/surveys/get_user_surveys`,
        requestOptions
      );
      const data = await response.json();

      setIsLoadingAndData({ isLoading: false, data: data });
    };

    fetchData();
  }, []);

  return (
    <div className="mt-2">
      <h1 className="text-xl">My surveys:</h1>
      {isLoadingAndData.isLoading ? (
        <LoadingSpinner />
      ) : (
        <MySurveysTable data={isLoadingAndData.data} />
      )}
    </div>
  );
};

export default MySurveysList;
