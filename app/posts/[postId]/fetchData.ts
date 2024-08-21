interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchData = async (id: string): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}` // Corrected URL with slash
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Post = await response.json();
  return data;
};

export default fetchData;
