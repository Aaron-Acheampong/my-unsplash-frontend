export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3300"
    : "https://myunsplash-api.onrender.com/";