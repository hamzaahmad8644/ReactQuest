import React from "react";
import ErrorBoundary from "./ErrorBoundary";

// A component that intentionally throws an error
function BuggyComponent() {
  throw new Error("Simulated error");
  // The line below never renders
  //   return <div>This won't render.</div>;
}

function ErrorBoundaryDemo() {
  return (
    <div className="demo-section">
      <h2>Error Boundary Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        An Error Boundary catches JavaScript errors in its child component tree
        and displays a fallback UI.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        It prevents the entire application from crashing by isolating errors to
        specific components.
      </p>
      <p>
        <strong>Usage:</strong> <br />
        Wrap parts of your UI with an Error Boundary to catch errors.
      </p>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaryDemo;
