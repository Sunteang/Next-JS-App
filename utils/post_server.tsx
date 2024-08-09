import PostComponent from "@/app/posts/postComponents";
import FetchData from "@/app/posts/fetchData";

interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Posts: React.FC = async () => {
  let posts: Post[] = [];

  try {
    posts = await FetchData();
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
    <div className="flex flex-col items-center">
      <div className="w-full grid grid-cols-4 place-items-center py-24 gap-y-7">
        <h1 className="text-5xl font-bold col-span-4 text-center mb-8">
          Post Cards
        </h1>
        {/* Fixed alignment */}
        {posts.slice(0, 16).map(
          (
            post // Limit to first 16 posts for performance
          ) => (
            <PostComponent
              key={post.id}
              albumId={post.albumId}
              id={post.id}
              title={post.title}
              url={post.url}
              thumbnailUrl={post.thumbnailUrl}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Posts;
