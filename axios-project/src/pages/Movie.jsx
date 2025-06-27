import axios from "axios";
import { useEffect, useState } from "react";

function Movie() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const API =
      "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    async function getMovieData() {
      try {
        const res = await axios.get(API);
        if (res.data && res.data.Search) {
          setMoviesData(res.data.Search);
        }
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    getMovieData();
  }, []);

  return (
    <div className="movie-list">
      {moviesData.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} className="movie-image" />
          <h2 className="movie-title">{movie.Title}</h2>
          <p className="movie-text">
            <strong>Type:</strong> {movie.Type}
          </p>
          <p className="movie-text">
            <strong>Year:</strong> {movie.Year}
          </p>
          <p className="movie-text">
            <strong>IMDb:</strong> {movie.imdbID}/10
          </p>
        </div>
      ))}
    </div>
  );
}

export default Movie;
