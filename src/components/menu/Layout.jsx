import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

import { useTheme } from "../../common/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className="appContainer">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
