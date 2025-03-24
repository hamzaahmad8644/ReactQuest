import React from "react";

// A simple component that displays a value
function ExpensiveComponent({ value }) {
  console.log("ExpensiveComponent rendered");
  return <div>Value: {value}</div>;
}

// Wrap with React.memo to avoid re-renders when props are unchanged.
const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

function MemoComponentDemo() {
  return (
    <div className="demo-section">
      <h2>React.memo Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        <code>React.memo</code> is a higher order component that prevents
        unnecessary re-renders by memoizing the result.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        It optimizes performance for pure functional components by re-rendering
        them only when their props change.
      </p>
      <MemoizedExpensiveComponent value="This component is memoized" />
    </div>
  );
}

export default MemoComponentDemo;
