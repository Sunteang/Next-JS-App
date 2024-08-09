"use client";

import React, { useState, useEffect } from "react";
import PostComponent from "./postComponents";
import fetchData from "./fetchData";

interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const LoadMore: React.FC<{ initialPosts: Post[] }> = ({ initialPosts }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      const newLimit = visibleCount + 4;
      const fetchedPosts = await fetchData(1, newLimit); // Fetch posts with increased limit
      setPosts(fetchedPosts);
      setVisibleCount(newLimit);
      if (fetchedPosts.length < newLimit) {
        setHasMore(false); // No more posts to load
      }
    } catch (error) {
      console.error("Failed to load more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1400px] m-auto flex flex-col items-center">
      <div className="w-full grid grid-cols-4 place-items-center py-20 gap-y-7 ">
        {posts.slice(0, visibleCount).map((post) => (
          <PostComponent
            key={post.id}
            albumId={post.albumId}
            id={post.id}
            title={post.title}
            url={post.url}
            thumbnailUrl={post.thumbnailUrl}
          />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={loadMorePosts}
          className="mt-2 bg-blue-500 text-white px-8 py-2 rounded-full mb-8"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default LoadMore;
