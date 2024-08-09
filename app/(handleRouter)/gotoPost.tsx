"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function GotoPosts() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/posts");
  };
  return (
    <div>
      <button
        className="text-xl p-2 bg-gray-600 text-white rounded-md hover:bg-blue-400 "
        onClick={handleClick}
      >
        Post Cards
      </button>
    </div>
  );
}
