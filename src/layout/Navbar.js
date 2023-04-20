import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <span>
          <Link className="btn " to="/adduser">
            Add User
          </Link>
          <Link className="btn " to="/createerror">
            Generate Error
          </Link>
          </span>

        </div>
      </nav>
    </div>
  );
}
