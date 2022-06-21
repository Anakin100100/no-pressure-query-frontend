import dynamic from "next/dynamic";
import { UserContext } from "../../contexts/user_context";
import { useContext } from "react";
import SurveysButtonsArray from "../../components/SurveysButtonsArray";
import MySurveysList from "../../components/MySurveysList";

const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });

const Profile = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <Navbar />
      <div className="m-2 bg-gray-200 rounded-2xl border-gray-700 border-2 p-4 flex-grow">
        <SurveysButtonsArray />
        <MySurveysList />
      </div>
    </div>
  );
};

export default Profile;
