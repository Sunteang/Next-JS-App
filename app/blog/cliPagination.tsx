"use client";

import React, { useState, useEffect } from "react";
import BlogComponent from "./blogComponent";
import fetchData from "./fetchData";

interface Blog {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PaginationClientProps {
  initialBlogs: Blog[];
  totalBlogs: number;
  limit: number;
  totalPages: number;
  initialPage: number;
}

const PaginationClient: React.FC<PaginationClientProps> = ({
  initialBlogs,
  totalBlogs,
  limit,
  totalPages,
  initialPage,
}) => {
  const [Blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      try {
        const newBlogs = await fetchData(currentPage, limit);
        setBlogs(newBlogs);
      } catch (error) {
        console.error("Failed to load Blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPage();
  }, [currentPage, limit]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-[1400px] m-auto flex flex-col items-center ">
      <div className="w-full grid grid-cols-4 place-items-center py-24 gap-y-7">
        {Blogs.map((blog) => (
          <BlogComponent
            key={blog.id}
            albumId={blog.albumId}
            id={blog.id}
            title={blog.title}
            url={blog.url}
            thumbnailUrl={blog.thumbnailUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 mb-4 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            disabled={loading}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationClient;
