import { NavLink } from "react-router-dom";

import "./SideNavBar.css";

export default function SideNavBar() {
  return (
    <div className="side-nav-bar">
      <nav>
        <ul className="side-nav-bar-items">
          <li>
            <NavLink
              to="/build/stats"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Stat Priorities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/build/result"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Results
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
