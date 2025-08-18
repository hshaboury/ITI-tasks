import React from 'react'
import "../App.css"
const Header = () => {
  return (
      <nav className="header">
          <div className="container">
              <span className="home">Home</span>
              <ul>
                  <li>
                      <a href="#home">Home</a>
                  </li>
                  <li>
                      <a href="#services">Services</a>
                  </li>
                  <li>
                      <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                      <a href="#about">About</a>
                  </li>
                  <li>
                      <a href="#team">Team</a>
                  </li>
                  <li>
                      <a href="#contact">Contact</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default Header