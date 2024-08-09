import React from "react";

function About() {
  return (
    <div className="max-w-[1400px] m-auto flex justify-center items-center w-full h-screen bg-gray-100">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-4">About tosCode.</h1>
        <h2 className="font-bold m-4 text-2xl">Welcome to tosCode!</h2>
        <p className="mx-[10rem] mb-2 text-xl">
          At tosCode, we are passionate about turning ideas into reality through
          code. Our mission is to empower businesses and individuals by
          providing top-notch software solutions that drive innovation and
          efficiency. Whether you're a startup looking to build your first app
          or an established company seeking to enhance your digital presence,
          tosCode has the expertise to bring your vision to life. With a focus
          on cutting-edge technologies and user-centric design, we deliver
          custom solutions tailored to meet your unique needs. Explore our blog
          to discover insights, tips, and success stories from the world of tech
          and beyond. Join us on our journey to make the digital world a better
          place, one line of code at a time.
        </p>
      </section>
    </div>
  );
}

export default About;
