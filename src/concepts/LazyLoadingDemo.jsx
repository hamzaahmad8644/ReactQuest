import React, { useState, Suspense } from "react";

// Lazily load the heavy component only when needed.
const LazyComponent = React.lazy(() => import("./LazyComponent"));

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
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoadingDemo;
