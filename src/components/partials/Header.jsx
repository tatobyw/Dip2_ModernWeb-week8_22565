import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaSlideshare } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark shadow sticky-top" style={{ backgroundColor: "#A708E8" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><FaHome /> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about"><FaSlideshare /> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/profile"><FaCalendarPlus /> Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/fruit"><FaLeaf /> Fruit</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header