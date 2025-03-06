import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">🎬 MovieApp</Link>
        <div className="ml-auto">
          <Link className="btn btn-warning" to="/favorites">⭐ Favorite</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
