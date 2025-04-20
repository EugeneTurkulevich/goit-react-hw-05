const mainUrl = "https://api.themoviedb.org/3/";

const apiGet = async (endpoint) => {
  const targetUrl = mainUrl + endpoint;
  try {
    const res = await fetch(`/api/proxy?url=${encodeURIComponent(targetUrl)}`);
    if (!res.ok) {
      throw new Error(`Помилка запиту: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("apiGet error:", err);
    throw err;
  }
};

export const getConfig = () => {
  return apiGet("configuration");
};
export const getTrending = (page = 1) => {
  const params = new URLSearchParams({
    language: "en-US",
    page: page,
  });
  return apiGet(`trending/movie/day?${params.toString()}`);
};
export const getMovie = (id) => {
  const params = new URLSearchParams({
    language: "en-US",
  });
  return apiGet(`movie/${id}?${params.toString()}`);
};
export const getMovieCredits = (id) => {
  const params = new URLSearchParams({
    language: "en-US",
  });
  return apiGet(`movie/${id}/credits?${params.toString()}`);
};
export const getMovieReviews = (id) => {
  const params = new URLSearchParams({
    language: "en-US",
  });
  return apiGet(`movie/${id}/reviews?${params.toString()}`);
};
export const searchMovies = (query, page) => {
  const params = new URLSearchParams({
    query: query,
    include_adult: false,
    language: "en-US",
    page: page,
  });
  return apiGet(`search/movie?${params.toString()}`);
};
