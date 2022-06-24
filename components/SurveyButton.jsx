import React from "react";
import Link from "next/link";

const SurveyButton = (props) => {
  return (
    <button className="block btn">
      <Link href={props.link}>{props.name}</Link>
    </button>
  );
};

export default SurveyButton;
