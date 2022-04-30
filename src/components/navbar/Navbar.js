import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar () {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="https://www.realtor.com/realtor-com.png" className="app-logo" alt="logo"/>
            </Link>
            <span className="nav-title">Earthquake Zen Garden</span>
            <Link to="/profile">
                <span className="welcome-text" aria-label="User Profile Link">Welcome Sally</span>
            </Link>
        </nav>
    )
}
