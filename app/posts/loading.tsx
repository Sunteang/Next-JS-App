import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin h-20 w-5 border-t-2 border-b-2 border-black"></div>
    </div>
  );
}
