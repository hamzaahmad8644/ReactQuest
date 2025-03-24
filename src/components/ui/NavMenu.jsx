import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const NavMenu = ({ title, links, isOpen, onToggle }) => {
  const scrollableRef = useRef(null);
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  useEffect(() => {
    const scrollable = scrollableRef.current;
    if (scrollable) {
      const checkScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        setShowScrollIcon(
          scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight
        );
      };

      // Check initially after open
      checkScroll();
      scrollable.addEventListener("scroll", checkScroll);
      return () => {
        scrollable.removeEventListener("scroll", checkScroll);
      };
    }
  }, [isOpen]);

  return (
    <div className="nav-dropdown">
      {/* Menu Button */}
      <button className="nav-menu" onClick={onToggle}>
        {title}
        <span className="icon">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Wrapper: Only render if open */}
      {isOpen && (
        <div className="nav-list-wrapper">
          {/* Scrollable Container */}
          <div className="scrollable" ref={scrollableRef}>
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.path} onClick={onToggle}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {showScrollIcon && <span className="scroll-icon">↓</span>}
        </div>
      )}
    </div>
  );
};

export default NavMenu;
