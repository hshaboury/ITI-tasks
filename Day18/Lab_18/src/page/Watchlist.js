import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(stored);
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="movies-grid">
          {watchlist.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;