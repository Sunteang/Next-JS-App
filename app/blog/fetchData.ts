interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchData = async (page: number, limit: number): Promise<Post[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
