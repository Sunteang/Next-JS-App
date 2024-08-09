import React from "react";
import PaginationClient from "./cliPagination"; // Client-side component for handling page switching
import fetchData from "./fetchData";

interface Blog {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PaginationServerProps {
  initialPage: number;
  limit: number;
  totalBlogs: number;
}

const PaginationServer: React.FC<PaginationServerProps> = async ({
  initialPage,
  limit,
  totalBlogs,
}) => {
  const totalPages = Math.ceil(totalBlogs / limit);

  // Fetch initial data for the initial page
  let initialBlogs: Blog[] = [];
  try {
    initialBlogs = await fetchData(initialPage, limit);
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }

  return (
    <PaginationClient
      initialBlogs={initialBlogs}
      totalBlogs={totalBlogs}
      limit={limit}
      totalPages={totalPages}
      initialPage={initialPage}
    />
  );
};

export default PaginationServer;
