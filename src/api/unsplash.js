const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const fetchPhotosByTag = async (tag) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(tag)}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    }
  );
  const data = await response.json();
  return data.results.map((item) => ({
    description: item.description,
    url: item.urls.regular,
    photoId: item.id
  }));
};
