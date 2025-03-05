import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== movie.id);
    } else {
      favorites.push(movie);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500'} 
          className="card-img-top" 
          alt={movie.title} 
        />
        <div className="card-body text-center">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.release_date}</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">Detalii</Link>
          <button className="btn btn-warning ms-2" onClick={toggleFavorite}>
            {isFavorite ? '★ Șters din favorite' : '☆ Adaugă la favorite'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
