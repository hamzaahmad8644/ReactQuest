import React, { useState, Suspense } from "react";

import LiveDemo from "../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const LazyLoadingDemoCode = `
function LazyComponent() {
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <p>
        This is a heavy widget loaded lazily! It could be an analytics chart, a
        user profile, or any complex component.
      </p>
    </div>
  );
}

// Lazily load the component
const LazyComponentToLoad = React.lazy(() =>
  Promise.resolve({ default: LazyComponent })
);

function LazyLoadingDemo() {
  // State to control whether the lazy component should be shown.
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div className="demo-section">
      <h2>Lazy Loading and Suspense Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        Uses <code>React.lazy</code> and <code>Suspense</code> to load
        components on demand.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Improves performance by splitting code and loading heavy components only
        when they’re needed.
      </p>
      <p>
        <strong>Real-world Example:</strong> <br />
        Imagine a dashboard where a heavy analytics widget is not needed
        immediately. You can load it lazily to speed up the initial load.
      </p>
      <button onClick={() => setShowLazy(true)}>Load Lazy Component</button>
      {showLazy && (
        <Suspense fallback={<div>Loading component...</div>}>
          <LazyComponentToLoad />
        </Suspense>
      )}
    </div>
  );
}

render(<LazyLoadingDemo />);
`;

function LazyComponent() {
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <p>
        This is a heavy widget loaded lazily! It could be an analytics chart, a
        user profile, or any complex component.
      </p>
    </div>
  );
}

// Lazily load the component
const LazyComponentToLoad = React.lazy(() =>
  Promise.resolve({ default: LazyComponent })
);

function LazyLoadingDemo() {
  // State to control whether the lazy component should be shown.
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div className="demo-section">
      <h2>Lazy Loading and Suspense Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        Uses <code>React.lazy</code> and <code>Suspense</code> to load
        components on demand.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Improves performance by splitting code and loading heavy components only
        when they’re needed.
      </p>
      <p>
        <strong>Real-world Example:</strong> <br />
        Imagine a dashboard where a heavy analytics widget is not needed
        immediately. You can load it lazily to speed up the initial load.
      </p>
      <button onClick={() => setShowLazy(true)}>Load Lazy Component</button>
      {showLazy && (
        <Suspense fallback={<div>Loading component...</div>}>
          <LazyComponentToLoad />
        </Suspense>
      )}
    </div>
  );
}

const LazyLoadingDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <LazyLoadingDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={LazyLoadingDemoCode} />
    </div>
  );
};

export default LazyLoadingDemoPage;
