import React from "react";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-10">
      <img
        src={icon}
        alt="Feature Icon"
        className="w-[160px] border-8 border-green-500 rounded-full p-4"
      />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-700 text-center mt-2">{description}</p>
    </div>
  );
};

export default FeatureItem;
