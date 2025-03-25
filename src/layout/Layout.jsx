import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar"; // Import Navbar component
import "./Layout.css"; // Import styles

const Layout = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return (
    <div className="layout-container">
      {/* Sidebar Navigation */}
      <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

      {/* Main Content */}
      <div className="layout-content">{children}</div>
    </div>
  );
};

export default Layout;
