interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const FetchData = async (p0: number, newLimit: number): Promise<Post[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
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

export default FetchData;
