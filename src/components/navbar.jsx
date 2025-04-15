import React from "react";

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">MyPortfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/tatiana-kosatkina-349838146/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/kosatkina" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
