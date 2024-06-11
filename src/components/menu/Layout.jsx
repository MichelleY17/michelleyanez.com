import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="appContainer">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
