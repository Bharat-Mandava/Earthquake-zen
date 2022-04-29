import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar () {
    return (
        <nav className="Navbar">
            <Link to="/">
                <img src="https://www.realtor.com/realtor-com.png" className="App-Logo" alt="logo"/>
            </Link>
            <span className="Nav-Title">Earthquake Zen Garden</span>
            <Link to="/profile">
                <span className="Welcome-Text" aria-label="User Profile Link">Welcome Sally</span>
            </Link>
        </nav>
    )
}
