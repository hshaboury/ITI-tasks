import React, { useEffect, useState } from 'react';
import api from '../services/api';
import MovieCard from '../components/MovieCard';
import './Home.css';
import ContactForm from "../components/ContactForm";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (!isSearched) {
      api.get('/movie/popular')
        .then(res => setMovies(res.data.results))
        .catch(err => console.error(err));
    }
  }, [isSearched]);

  const handleSearchClick = () => {
    if (searchQuery.trim() !== '') {
      api.get('/search/movie', {
        params: { query: searchQuery }
      })
        .then(res => {
          setMovies(res.data.results);
          setIsSearched(true);
        })
        .catch(err => console.error(err));
    } else {
      setIsSearched(false);
    }
  };

  return (
    <div className="home-container">
      <div className="welcome-box">
        <h2>Welcome to our movie app</h2>
        <p>Millions of movies, TV shows, and people to discover. Explore now.</p>

        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Search everywhere..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
         <button className="search-button" onClick={handleSearchClick}>
            Search
         </button>

        </div>
      </div>

      <h3 className="section-title">
        {isSearched && searchQuery ? `Search Results for "${searchQuery}"` : "Popular Movies"}
      </h3>

      <div className="movies-grid">
        {movies.length === 0 ? <p>No results found.</p> :
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      
      <div className="contact-form-section">
        <h3>Contact Us</h3>
        <ContactForm />
      </div>

    </div>
  );
}

export default Home;
