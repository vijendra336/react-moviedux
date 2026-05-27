import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie, index) => (
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
