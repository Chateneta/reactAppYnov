import React from 'react';
import { Link } from "react-router-dom";




export function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-primary">
        <div className="container">
            <div class="navbar-brand">jQuery example</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-dark">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-dark">About</Link>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
  );
}

