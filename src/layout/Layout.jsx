import React from "react";
import Navbar from "../components/ui/Navbar"; // Import Navbar component
import "./Layout.css"; // Import styles

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Sidebar Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="layout-content">{children}</div>
    </div>
  );
};

export default Layout;
