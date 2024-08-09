"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Blog {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BlogComponent: React.FC<Blog> = ({
  albumId,
  id,
  title,
  url,
  thumbnailUrl,
}) => {
  const router = useRouter();

  return (
    <div
      className="rounded-xl border border-slate-700 flex flex-col max-w-64 justify-center items-center p-5 cursor-pointer"
      onClick={() => router.push(`/blog/${id}`)}
    >
      <h1 className="w-full h-10 overflow-hidden text-3xl font-semibold text-center">
        {title}
      </h1>
      <Image src={url} alt={title} width={400} height={400} />
    </div>
  );
};

export default BlogComponent;
