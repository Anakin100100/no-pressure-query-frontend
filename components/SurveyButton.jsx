import React from "react";
import Link from "next/link";

const SurveyButton = (props) => {
  return (
    <button className="inline-flex text-sm md:text-2xl p-2 rounded-md bg-blue-500">
      <Link href={props.link}>{props.name}</Link>
    </button>
  );
};

export default SurveyButton;
