import React from "react";

function Navbar({ toggleTheme }) {
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Portofolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={toggleTheme} className="btn btn-outline btn-primary">
          {" "}
          Theme
        </button>

      </div>
    </div>
  );
}

export default Navbar;
