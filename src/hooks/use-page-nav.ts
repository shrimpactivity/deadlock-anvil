import { useState } from "react";

export function usePageNav(pages: string[], defaultPage?: string) {
    const [activePage, setActivePage] = useState(defaultPage);

    return { pages, activePage, onPageChange: (page: string) => setActivePage(page) };
}
