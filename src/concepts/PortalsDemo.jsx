import React from "react";
import ReactDOM from "react-dom";

function PortalsDemo() {
  return (
    <div className="demo-section">
      <h2>Portals Demo</h2>
      <p>
        <strong>What it does:</strong>
        <br />
        React portals let you render a component's children into a DOM node that
        exists outside the DOM hierarchy of the parent.
      </p>
      <p>
        <strong>Why use it:</strong>
        <br />
        Useful for modals, tooltips, or any UI element that should visually
        break out of its parent container.
      </p>
      <p>
        <strong>Usage:</strong>
        <br />
        Typically, you create a <code>&lt;div id="portal-root"&gt;</code> in
        your HTML and render your portal content there.
      </p>
      {ReactDOM.createPortal(
        <div
          style={{
            background: "#007bff",
            padding: "10px",
            borderRadius: "4px",
            color: "#fff",
          }}
        >
          This content is rendered using a portal!
        </div>,
        document.getElementById("portal-root")
      )}
    </div>
  );
}

export default PortalsDemo;
