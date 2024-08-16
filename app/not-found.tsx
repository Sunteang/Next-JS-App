import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-red-500 font-mono">404 | Not Found Page.</h1>
      <p className="text-xl mt-4 text-black font-mono">
        Could Not Find Your Page.
      </p>
    </div>
  );
};

export default NotFound;
