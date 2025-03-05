import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Filmele Favorite</h2>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center">Nu ai adăugat filme favorite.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
