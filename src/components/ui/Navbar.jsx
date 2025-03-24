import { useState } from "react";
import NavMenu from "./NavMenu";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="navbar-header">
        <h1>React Concepts and Demos</h1>
        <button className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </button>
      </div>
      {/* Hooks Section */}
      <div className={`navbar-content ${mobileMenuOpen ? "open" : ""}`}>
        <NavMenu
          title="Hooks"
          links={[
            { path: "/state", label: "useState" },
            { path: "/effect", label: "useEffect" },
            { path: "/context", label: "useContext" },
            { path: "/reducer", label: "useReducer" },
            { path: "/ref", label: "useRef" },
            { path: "/memo", label: "useMemo" },
            { path: "/callback", label: "useCallback" },
            { path: "/layouteffect", label: "useLayoutEffect" },
            { path: "/imperativehandle", label: "useImperativeHandle" },
            { path: "/debugvalue", label: "useDebugValue" },
            { path: "/transition", label: "useTransition" },
            { path: "/customhook", label: "Custom Hook" },
          ]}
          isOpen={activeMenu === "Hooks"}
          onToggle={() => handleMenuToggle("Hooks")}
        />

        {/* Additional Concepts */}
        <NavMenu
          title="General Concepts"
          links={[
            { path: "/fragments", label: "Fragments" },
            { path: "/uselocalstorage", label: "Local Storage" },
            { path: "/errorboundary", label: "Error Boundary" },
            { path: "/memocomponent", label: "React.memo" },
            { path: "/hoc", label: "Higher-Order Component" },
            { path: "/renderprops", label: "Render Props" },
            { path: "/lazy", label: "Lazy Loading" },
            { path: "/redux", label: "Redux Toolkit" },
          ]}
          isOpen={activeMenu === "General Concepts"}
          onToggle={() => handleMenuToggle("General Concepts")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
