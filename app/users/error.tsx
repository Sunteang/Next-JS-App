"use client";
import React from "react";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" text-red-500 text-2xl">
        Error using fetching data. Please check the link.
      </div>
    </div>
  );
}
