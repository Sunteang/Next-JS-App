import React, { useState } from "react";
import LoadMore from "./cliLoadmore";
import fetchData from "./fetchData";

interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Posts: React.FC = async () => {
  // Initial fetch for at least 10 posts
  let initialPosts: Post[] = [];
  try {
    initialPosts = await fetchData(1, 12); // Fetch initial data with limit 12
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="w-full text-center py-24">
        <h1 className="text-3xl font-bold">
          Something went wrong. Please try again later.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className=" text-3xl mt-[6rem] font-bold text-center mb-4 p-2 border-b-2 border-b-gray-600">
        Post Cards
      </h1>
      <LoadMore initialPosts={initialPosts} />
    </div>
  );
};

export default Posts;
