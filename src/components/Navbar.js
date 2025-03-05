import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">🎬 MovieApp</Link>
        <div className="ml-auto">
          <Link to="/favorites" className="btn btn-warning">⭐ Favorite</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
