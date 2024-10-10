import "./SideNavBar.css";

interface Props {
    pages: string[];
    activePage?: string;
    onPageChange: (page: string) => void;
}

export default function SideNavBar({ pages, activePage, onPageChange }: Props) {
    return (
        <div className="side-nav-bar">
            <nav>
                <ul className="side-nav-bar-items">
                    {pages.map((page) => (
                        <li key={page} className={page === activePage ? "active" : ""}>
                            <button onClick={() => onPageChange(page)}>{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
