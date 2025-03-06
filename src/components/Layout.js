import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        <Outlet /> {/* Aici se vor încărca paginile Home, MovieDetails, Favorites */}
      </main>
    </div>
  );
}

export default Layout;
