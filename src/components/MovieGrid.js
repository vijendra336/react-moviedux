import React from "react";
import "../styles.css";

export default function MovieGrid() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1")
    //     .then((response) => response.json())
    //     .then((data) => setMovies(data.results))
    //     .catch((error) => console.error("Error fetching movies:", error));

    const m = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    setMovies(m);
  }, []);

  return <div> {movies.length}</div>;
}
