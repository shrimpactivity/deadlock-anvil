import SideNavBar from "@/components/nav/SideNavBar";
import { usePageNav } from "../../hooks/use-page-nav";
import PrioritiesPage from "./PrioritiesPage";
import ResultsPage from "./ResultsPage";
import { ReactNode } from "react";

export default function BuildRoot() {
    const pages: Record<string, ReactNode> = {
        "Item Priorities": <PrioritiesPage />,
        Results: <ResultsPage />,
    };
    const defaultPage = "Item Priorities";
    
    const pageNav = usePageNav(Object.keys(pages), defaultPage);

    return (
        <div className="Build Page">
            <SideNavBar {...pageNav} />
            {pageNav.activePage && pages[pageNav.activePage]}
        </div>
    );
}
