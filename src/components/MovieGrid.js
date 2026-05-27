import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [genre, setGenre] = React.useState("All Genres");
  const [rating, setRating] = React.useState("All");

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

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
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

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Fantasy</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>OK</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

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
