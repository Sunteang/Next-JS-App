"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function GotoPost() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/post");
  };
  return (
    <div>
      <button
        className="text-xl p-2 bg-blue-300 rounded-md hover:bg-blue-400"
        onClick={handleClick}
      >
        Users
      </button>
    </div>
  );
}
