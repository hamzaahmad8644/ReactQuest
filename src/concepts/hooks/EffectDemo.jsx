import React, { useState, useEffect } from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const EffectDemoCode = `
function EffectDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="demo-section">
      <h2>useEffect Demo</h2>

      <p>Timer: {seconds} seconds</p>
      <p>This side effect increments the timer every second.</p>

      <p>
        <strong>What it does:</strong> <br />
        <code>useEffect</code> runs side effects after the component renders
        (e.g., data fetching).
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Handle logic that isn't purely rendering, such as subscriptions or
        fetching data from APIs.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Not by itself, but if you update state within it, that triggers
        re-renders.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        Anytime you need to synchronize a component with external systems or
        APIs.
      </p>
    </div>
  );
}
render(<EffectDemo />);
`;

function EffectDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="demo-section">
      <h2>useEffect Demo</h2>

      <p>Timer: {seconds} seconds</p>
      <p>This side effect increments the timer every second.</p>

      <p>
        <strong>What it does:</strong> <br />
        <code>useEffect</code> runs side effects after the component renders
        (e.g., data fetching).
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Handle logic that isn't purely rendering, such as subscriptions or
        fetching data from APIs.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Not by itself, but if you update state within it, that triggers
        re-renders.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        Anytime you need to synchronize a component with external systems or
        APIs.
      </p>
    </div>
  );
}

const EffectDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <EffectDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={EffectDemoCode} />
    </div>
  );
};

export default EffectDemoPage;
