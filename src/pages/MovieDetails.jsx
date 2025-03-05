import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = '6ba0e17f3c18d9a99eaeab32f50c2a62'; 
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2 className="text-center mt-5">Se încarcă...</h2>;

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        className="img-fluid" 
        alt={movie.title} 
      />
      <p><strong>An:</strong> {movie.release_date}</p>
      <p><strong>Gen:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
      <p><strong>Descriere:</strong> {movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
