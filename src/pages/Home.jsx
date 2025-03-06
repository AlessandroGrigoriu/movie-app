import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]); // Filme recomandate
  const [bannerMovie, setBannerMovie] = useState(null); // Film pentru banner
  const API_KEY = '6ba0e17f3c18d9a99eaeab32f50c2a62';

  useEffect(() => {
    getRecommendedMovies();
  }, []);

  // filme populare random pentru homepage
  const getRecommendedMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecommendedMovies(data.results.slice(0, 6)); // doar 6 filme populare

      //  film random pentru banner
      if (data.results.length > 0) {
        setBannerMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      }
    } catch (error) {
      console.error('Eroare la obținerea recomandărilor:', error);
    }
  };

  // Funcția de căutare filme
  const searchMovies = async () => {
    if (!query.trim()) return; // Nu căuta dacă inputul este gol

    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Eroare la căutare:', error);
      setMovies([]);
    }
  };

  // Permite ENTER pentru căutare
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <div className="container mt-4">

      {/* Banner cu un film random */}
      {bannerMovie && (
        <div className="banner mb-4" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <h1>{bannerMovie.title}</h1>
        </div>
      )}

      {/* Search Bar */}
      <h2 className="text-center mt-4">Caută filme</h2>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nume film..."
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          onKeyPress={handleKeyPress} // Permite ENTER
        />
        <button className="btn btn-primary" onClick={searchMovies}>Caută</button>
      </div>

      {/* Afișare filme căutate sau recomandate */}
      {movies.length > 0 ? (
        <>
          <h3 className="text-center">Rezultate căutare</h3>
          <div className="row">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center">Recomandări pentru tine</h3>
          <div className="row">
            {recommendedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
