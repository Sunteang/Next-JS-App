"use client";
import React, { useEffect, useState } from "react";
import fetchData from "./fetchBlogData";
import Image from "next/image";
import BackToBlog from "@/app/(handleRouter)/handleBlogBack";

interface Blog {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BlogDetail = ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  const [dataDetail, setDataDetail] = useState<Blog | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const data = await fetchData(params.blogId);
        setDataDetail(data);
      } catch (error) {
        setError("Failed to fetch blog: " + (error as Error).message);
      }
    };

    loadDetail();
  }, [params.blogId]);

  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-full pt-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Blog Detail</h1>
      <h2 className="text-lg">
        Album ID: {dataDetail?.albumId} | ID: {dataDetail?.id}
      </h2>
      <h3 className="text-xl font-semibold">{dataDetail?.title}</h3>
      {dataDetail && (
        <Image
          src={dataDetail.url}
          width={400}
          height={400}
          alt={dataDetail.title} // Descriptive alt attribute blog
          className="my-4"
        />
      )}
      <div className="text-center">
        <p>Thumbnail URL: {dataDetail?.thumbnailUrl}</p>
        <p>URL: {dataDetail?.url}</p>
      </div>
      <div className="my-6">
        <BackToBlog />
      </div>
    </div>
  );
};

export default BlogDetail;
