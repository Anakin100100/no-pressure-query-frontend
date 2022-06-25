import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });

const mine = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <Navbar />
      <div className="m-2 bg-gray-200 rounded-2xl border-gray-700 border-2 p-4 flex-grow">
        <div>my_filled_surveys</div>
      </div>
    </div>
  );
};

export default mine;
