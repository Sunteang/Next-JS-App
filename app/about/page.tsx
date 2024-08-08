import React from "react";
import GotoUsers from "./gotoUsers";

function About() {
  return (
    <div className="max-w-[1200px] m-auto flex justify-center items-center w-full h-screen bg-gray-100">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4">About Page</h1>
        <GotoUsers />
      </section>
    </div>
  );
}

export default About;
