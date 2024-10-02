// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient mb-3 p-3 shadow">
    <div className="container-fluid">
        <Link className="navbar-brand text-dark h1" to="/home">Foodie App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark h2" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark h2" to="/contact" navigateto="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark h2" to="/About">About</Link>
            </li>
          </ul>
          <form className="ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </form>
          <button className="btn btn-success  rounded-pill mr-5" type="submit">Search</button>

          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-dark h2" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark h2"  to="/register">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark h2"  to="/login">Logout
            </Link>
          </li>
             {/* <li className="nav-item">
            <Link className="nav-link text-white" to="/register">
              Register
            </Link> 
          </li> */}
        </ul>
      </div>
        </div>
    </nav>
    <Outlet></Outlet>
    </div>

  
  );
};

export default Navbar;