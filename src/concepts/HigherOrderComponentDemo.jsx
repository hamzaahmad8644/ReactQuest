import React from "react";

// A simple HOC that adds a border around the wrapped component.
function withBorder(Component) {
  return function WithBorder(props) {
    return (
      <div
        style={{
          border: "2px solid #007bff",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Component {...props} />
      </div>
    );
  };
}

function SimpleComponent({ message }) {
  return <div>{message}</div>;
}

const EnhancedComponent = withBorder(SimpleComponent);

function HigherOrderComponentDemo() {
  return (
    <div className="demo-section">
      <h2>Higher-Order Component (HOC) Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        An HOC is a function that takes a component and returns a new component
        with added functionality.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        To reuse component logic across multiple components.
      </p>
      <EnhancedComponent message="This component is enhanced with a border." />
    </div>
  );
}

export default HigherOrderComponentDemo;
