import React, { useState, useCallback } from "react";
import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const CallbackDemoCode = `
function CallbackChild({ onAction }) {
  console.log("CallbackChild re-rendered");
  return <button onClick={onAction}>Perform Action</button>;
}

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const handleAction = useCallback(() => {
    console.log("Action performed");
  }, []);

  return (
    <div className="demo-section">
      <h2>useCallback Demo</h2>

      <p>Count: {count}</p>
      <CallbackChild onAction={handleAction} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useCallback</code> returns a memoized function that only changes
        if its dependencies change.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Prevents unnecessary re-renders in child components that rely on a
        stable function reference.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Not by itself, but if dependencies change, the function reference
        updates and children may re-render.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        When passing callbacks to child components that are memoized or pure, to
        optimize performance.
      </p>
    </div>
  );
}
render(<CallbackDemo />);
`;

function CallbackChild({ onAction }) {
  console.log("CallbackChild re-rendered");
  return <button onClick={onAction}>Perform Action</button>;
}

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const handleAction = useCallback(() => {
    console.log("Action performed");
  }, []);

  return (
    <div className="demo-section">
      <h2>useCallback Demo</h2>

      <p>Count: {count}</p>
      <CallbackChild onAction={handleAction} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useCallback</code> returns a memoized function that only changes
        if its dependencies change.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Prevents unnecessary re-renders in child components that rely on a
        stable function reference.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Not by itself, but if dependencies change, the function reference
        updates and children may re-render.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        When passing callbacks to child components that are memoized or pure, to
        optimize performance.
      </p>
    </div>
  );
}

const CallbackDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <CallbackDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={CallbackDemoCode} />
    </div>
  );
};

export default CallbackDemoPage;
