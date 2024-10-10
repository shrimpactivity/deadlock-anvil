import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/build"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Build Tool
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/items"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Items
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
