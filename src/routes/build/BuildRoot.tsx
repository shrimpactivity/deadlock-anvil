import SideNavBar from "@/components/nav/SideNavBar";
import { useState } from "react";

export default function BuildRoot() {
    const [activePage, setActivePage] = useState<string | undefined>();
    
    return (
        <div>
            <SideNavBar />
        </div>
    );
}
