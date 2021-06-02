const API_KEY = "9d2b418de396026e5d06d21cdfb0ee59";

const requests = [
  {
    fetchbanner: `/week?api_key=${API_KEY}&language=en-US`,
    genre: `/discover/movie?api_key=${API_KEY}&with_genres=`,
    fetchGenre: `genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomantic: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  {
    genre: `/discover/tv?api_key=${API_KEY}&with_genres=`,
    fetchGenre: `genre/tv/list?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchAction: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchRomantic: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
  {
    genre: `/discover/all?api_key=${API_KEY}&with_genres=`,
    fetchGenre: `genre/all/list?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchRomantic: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
];

export default requests;
