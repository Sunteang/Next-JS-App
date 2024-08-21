interface Blog {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchData = async (id: string): Promise<Blog> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Blog = await response.json();
  return data;
};

export default fetchData;
