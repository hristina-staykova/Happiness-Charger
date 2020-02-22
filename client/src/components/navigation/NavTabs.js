import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/gratitude"
          className={
            window.location.pathname === "/gratitude"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Gratitude
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/inspiration"
          className={
            window.location.pathname === "/inspiration"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Inspirational Cookies
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
