import React from "react";
import PaginationServer from "./serPagination";
import fetchData from "./fetchData";

interface Blog {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BlogPage: React.FC = async () => {
  const initialPage = 1;
  const limit = 12;

  let totalBlogs: number = 0;

  try {
    // Fetching a large number of blogs initially to calculate the total number of pages
    const allBlogs = await fetchData(initialPage, 100); // Fetch more blogs for total calculation
    totalBlogs = allBlogs.length;
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
      <h1 className="text-3xl mt-[6rem] font-bold text-center mb-4 p-2 border-b-2 border-b-gray-600">
        Blog: Blog Cards
      </h1>
      <PaginationServer
        initialPage={initialPage}
        limit={limit}
        totalBlogs={totalBlogs} // Use totalBlogs here
      />
    </div>
  );
};

export default BlogPage;
