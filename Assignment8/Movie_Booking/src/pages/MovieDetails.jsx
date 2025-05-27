import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/MovieDetails.css";

const MovieDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details">
      <img src={state.Poster} alt={state.Title} />
      <h2>{state.Title}</h2>
      <button onClick={() => navigate(`/book/${state.imdbID}`, { state })}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
