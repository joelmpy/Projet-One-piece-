import React from "react";
import "../Header/Header.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

function Header() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Personnage">Personnage</Link>
            </li>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </nav>
    </>
  );
}

export default Header;
