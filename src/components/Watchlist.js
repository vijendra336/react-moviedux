import React from "react";
import "../styles.css";

import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your watchlist</h1>
      <div className="watchlist">
        {watchlist.length === 0 ? (
          <p>Your watchlist is empty. Start adding movies!</p>
        ) : (
          watchlist.map((movieId) => {
            const movie = movies.find((m) => m.id === movieId);
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
