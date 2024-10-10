import { NavLink } from "react-router-dom";

import "./SideNavBar.css";
import { useState } from "react";

export default function SideNavBar() {
    const pages = ["Item Priorities", "Results"];
    const [activePage, setActivePage] = useState(pages[0]);

    return (
        <div className="side-nav-bar">
            <nav>
                <ul className="side-nav-bar-items">
                    <li>
                        <NavLink
                            to="/build/priorities"
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : isPending ? "pending" : ""
                            }
                        >
                            Item Priorities
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
