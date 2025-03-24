import React, { useState, useDebugValue } from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const DebugValueDemoCode = `
function useCustomHook(value) {
  useDebugValue(value > 10 ? "Large" : "Small");
  return value;
}

function DebugValueDemo() {
  const [count, setCount] = useState(0);
  const debugValue = useCustomHook(count);

  return (
    <div className="demo-section">
      <h2>useDebugValue Demo</h2>

      <p>Count: {debugValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useDebugValue</code> displays a label in React DevTools for
        debugging custom hooks.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Helpful for diagnosing and understanding custom hook usage in DevTools.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        No, it doesn’t affect runtime behavior, only what appears in DevTools.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        When you have a custom hook you want to label for easier debugging.
      </p>
    </div>
  );
}
render(<DebugValueDemo />);
`;

function useCustomHook(value) {
  useDebugValue(value > 10 ? "Large" : "Small");
  return value;
}

function DebugValueDemo() {
  const [count, setCount] = useState(0);
  const debugValue = useCustomHook(count);

  return (
    <div className="demo-section">
      <h2>useDebugValue Demo</h2>

      <p>Count: {debugValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useDebugValue</code> displays a label in React DevTools for
        debugging custom hooks.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Helpful for diagnosing and understanding custom hook usage in DevTools.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        No, it doesn’t affect runtime behavior, only what appears in DevTools.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        When you have a custom hook you want to label for easier debugging.
      </p>
    </div>
  );
}

const DebugValueDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <DebugValueDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={DebugValueDemoCode} />
    </div>
  );
};

export default DebugValueDemoPage;
