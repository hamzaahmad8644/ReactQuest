import React from "react";
import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const ContextDemoCode = `
const ThemeContext = createContext("light");
function ContextDemoChild() {
  const theme = useContext(ThemeContext);
  return <p>Current theme from Context: {theme}</p>;
}

function ContextDemo() {
  return (
    <div className="demo-section">
      <ThemeContext.Provider value="dark">
        <ContextDemoChild />
      </ThemeContext.Provider>
      <p>We are providing a "dark" theme to the child via context.</p>
    </div>
  );
}
render(<ContextDemo />);
`;

function ContextDemo() {
  return (
    <div className="demo-section">
      <h2>useContext Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        <code>useContext</code> allows you to consume values from a Context
        without prop drilling.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Useful for sharing global data (like theme or user info) across many
        components.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Yes, if the context value changes, all consumers re-render.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        When multiple components need the same data without manually passing
        props down.
      </p>
    </div>
  );
}

const ContextDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <ContextDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={ContextDemoCode} />
    </div>
  );
};

export default ContextDemoPage;
