import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-96 relative"
      style={{ backgroundImage: "url('/img/bank-tree.jpeg')" }}
    >
      <div className="bg-white p-6 w-80 absolute top-16 right-16">
        <h2 className="text-lg font-bold">No fees.</h2>
        <h2 className="text-lg font-bold">No minimum deposit.</h2>
        <h2 className="text-lg font-bold">High interest rates.</h2>
        <p className="mt-4 text-sm">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
