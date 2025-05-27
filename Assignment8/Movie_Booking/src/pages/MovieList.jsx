import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MovieList.css";

const MovieList = () => {
  const API_KEY = "463cbac9";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search.slice(0, 16));
        } else {
          setMovies([]);
        }
      });
  };

  useEffect(() => {
    fetchMovies("action");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) fetchMovies(search.trim());
  };

  return (
    <div className="movie-list">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="card" onClick={() => navigate(`/details/${movie.imdbID}`, { state: movie })}>
            <img src={movie.Poster} alt={movie.Title} />
            <h4>{movie.Title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
