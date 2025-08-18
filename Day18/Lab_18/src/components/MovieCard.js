import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseDate = movie.release_date || movie.first_air_date;
  const title = movie.title || movie.name;

  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    const found = stored.find((item) => item.id === movie.id);
    setIsInWatchlist(!!found);
  }, [movie.id]);

  const toggleWatchlist = () => {
    let stored = JSON.parse(localStorage.getItem('watchlist')) || [];

    if (isInWatchlist) {
      stored = stored.filter(item => item.id !== movie.id);
    } else {
      stored.push(movie);
    }

    localStorage.setItem('watchlist', JSON.stringify(stored));
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={posterUrl} alt={title} className="poster" />
        <div className="rating-circle">{Math.round(movie.vote_average * 10)}</div>
        <h4 className="movie-title">{title}</h4>
        <p className="movie-date">{new Date(releaseDate).toDateString()}</p>
      </Link>
      <div className="card-actions">
        <span onClick={toggleWatchlist} style={{ cursor: 'pointer' }}>
          {isInWatchlist ? '💛' : '🤍'}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
