import React from "react";
import Link from "next/link";

const SurveyButton = (props) => {
  return (
    <button className="flex items-center justify-center text-sm md:text-2xl p-2 rounded-md bg-blue-500 place-items-center w-1/4 h-12 text-center">
      <div className="flex">
        <Link href={props.link}>{props.name}</Link>
      </div>
    </button>
  );
};

export default SurveyButton;
