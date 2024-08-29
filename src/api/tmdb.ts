const BASE_URL = "https://api.themoviedb.org/3/movie";

export const NowPlayingUrl = `${BASE_URL}/now_playing`;
export const PopularUrl = `${BASE_URL}/popular`;
export const UpcomingUrl = `${BASE_URL}/upcoming`;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTcyNDgzMjU0MS4zMzIwMSwic3ViIjoiNjEyNWJkNTk4YzMxNTkwMDYyOTg5NTM1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.YPaKU9iEUGAIXBablqVQS-bySJz1tZ7I7Isew1rBmSg",
  },
};