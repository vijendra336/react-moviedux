import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));

    //const m = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    //setMovies(data.results);
  }, []);

  console.log("MovieGrid component rendered");
  console.log({ movies });

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
      />
      <div className="movies-grid">
        {movies.map((movie, index) => (
          // <div key={movie.id} className="movie-card">
          //   <img src={`images/${movie.image}`} alt={movie.title} />
          //   <div className="movie-card-info">
          //     <h3 className="movie-card-title">{movie.title}</h3>
          //     <p className="movie-card-genre">{movie.genre}</p>
          //     <p className="movie-card-rating">{movie.rating}</p>
          //   </div>
          // </div>

          // passed movie as props to MovieCart component
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
