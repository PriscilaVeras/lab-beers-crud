import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar mb-5 navbar-expand-lg  navbar-dark bg-primary d-flex justify-content-center">
      <Link to="/">
        <i
          className="fas fa-home"
          style={{ fontSize: '50px', color: 'white' }}
        ></i>
      </Link>
    </nav>
  );
}
