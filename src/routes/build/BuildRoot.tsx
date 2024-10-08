import SideNavBar from "@/components/nav/SideNavBar";
import { Outlet } from "react-router-dom";

export default function BuildRoot() {
  return (
    <div>
      <SideNavBar />
      <Outlet />
    </div>
  )
}