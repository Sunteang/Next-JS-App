"use client";
import React, { useEffect, useState } from "react";
import fetchData from "./fetchData";
import Image from "next/image";
import BackToPost from "@/app/(handleRouter)/handlePostBack";

interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PostDetail = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  const [dataDetail, setDataDetail] = useState<Post | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const data = await fetchData(params.postId);
        setDataDetail(data);
      } catch (error) {
        setError("Failed to fetch post: " + (error as Error).message); // Type inference for error
      }
    };

    loadDetail();
  }, [params.postId]);

  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-full pt-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Post Detail</h1>
      <h2 className="text-lg">
        Album ID: {dataDetail?.albumId} | ID: {dataDetail?.id}
      </h2>
      <h3 className="text-xl font-semibold">{dataDetail?.title}</h3>
      {dataDetail && (
        <Image
          src={dataDetail.url}
          width={400}
          height={400}
          alt={dataDetail.title} // Descriptive alt attribute
          className="my-4"
        />
      )}
      <div className="text-center">
        <p>Thumbnail URL: {dataDetail?.thumbnailUrl}</p>
        <p>URL: {dataDetail?.url}</p>
      </div>
      <div className="my-6">
        <BackToPost />
      </div>
    </div>
  );
};

export default PostDetail;
