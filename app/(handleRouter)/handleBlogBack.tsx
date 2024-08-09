"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BackToBlog() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/blog");
  };
  return (
    <div>
      <button
        className="text-xl p-2 px-8 bg-black rounded-full hover:bg-gray-800 text-white "
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
}
