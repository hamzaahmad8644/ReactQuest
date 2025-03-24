import React from "react";
import LiveDemo from "../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const fragmentsDemoCode = `
function FragmentsDemo() {
  return (
    <div className="demo-section">
      <h2>Fragments Demo</h2>
      <p>
        <strong>What it does:</strong><br />
        React Fragments let you group a list of children without adding extra nodes to the DOM.
      </p>
      <p>
        <strong>Why use it:</strong><br />
        Useful when you want to return multiple elements from a component without introducing an unnecessary wrapper element.
      </p>
      <p>
        <strong>Usage:</strong><br />
        Use the shorthand syntax <code>&lt;&gt;&lt;/&gt;</code> or <code>React.Fragment</code> to wrap your elements.
      </p>
      <>
        <div style={{ background: "#e0e0e0", margin: "5px", padding: "5px" }}>Item 1</div>
        <div style={{ background: "#e0e0e0", margin: "5px", padding: "5px" }}>Item 2</div>
        <div style={{ background: "#e0e0e0", margin: "5px", padding: "5px" }}>Item 3</div>
      </>
    </div>
  );
}
render(<FragmentsDemo />);
`;

// The actual FragmentsDemo component (live preview)
function FragmentsDemo() {
  return (
    <div className="demo-section">
      <h2>Fragments Demo</h2>
      <p>
        <strong>What it does:</strong>
        <br />
        React Fragments let you group a list of children without adding extra
        nodes to the DOM.
      </p>
      <p>
        <strong>Why use it:</strong>
        <br />
        Useful when you want to return multiple elements from a component
        without introducing an unnecessary wrapper element.
      </p>
      <p>
        <strong>Usage:</strong>
        <br />
        Use the shorthand syntax <code>&lt;&gt;&lt;/&gt;</code> or{" "}
        <code>React.Fragment</code> to wrap your elements.
      </p>
      <>
        <div style={{ background: "#e0e0e0", margin: "5px", padding: "5px" }}>
          Item 1
        </div>
        <div style={{ background: "#e0e0e0", margin: "5px", padding: "5px" }}>
          Item 2
        </div>
        <div style={{ background: "#e0e0e0", margin: "5px", padding: "5px" }}>
          Item 3
        </div>
      </>
    </div>
  );
}

const FragmentsDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <FragmentsDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={fragmentsDemoCode} />
    </div>
  );
};

export default FragmentsDemoPage;
