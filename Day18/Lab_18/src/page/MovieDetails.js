import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/movie/${id}`) 
      .then(res => {
        console.log("Movie data:", res.data);
        setMovie(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching movie details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: 30 }}>Loading...</p>;
  if (!movie) return <p style={{ padding: 30 }}>Movie not found.</p>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <div className="details-container">
      <img
        src={posterUrl}
        alt={movie.title || movie.name || 'No Title'}
        className="details-poster"
      />
      <div className="details-info">
        <h2>{movie.title || movie.name || 'No Title'}</h2>
        <p><strong>Release Date:</strong> {movie.release_date || 'N/A'}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average || 'N/A'}</p>
        <p><strong>Overview:</strong> {movie.overview || 'No overview available'}</p>
        <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
        <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} mins` : 'N/A'}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
