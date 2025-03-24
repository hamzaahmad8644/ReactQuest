import React from "react";

import LiveDemo from "../components/LiveDemo";

// Define your FetchDemo component's code as a string
const ErrorBoundaryDemoCode = `
// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. See the logs (Remember this is simulated error)</h1>;
    }
    return this.props.children;
  }
}

// A component that intentionally throws an error
function BuggyComponent() {
  throw new Error("Simulated error");
}

function ErrorBoundaryDemo() {
  return (
    <div className="demo-section">
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

render(<ErrorBoundaryDemo />);
`;

// Error Boundary Component

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
    </div>
  );
}

const ErrorBoundaryDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <ErrorBoundaryDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={ErrorBoundaryDemoCode} />
    </div>
  );
};

export default ErrorBoundaryDemoPage;
