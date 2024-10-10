import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

export default function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
