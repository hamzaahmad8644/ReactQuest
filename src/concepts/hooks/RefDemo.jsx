import React, { useRef } from "react";

function RefDemo() {
  const inputRef = useRef(null);

  return (
    <div className="demo-section">
      <h2>useRef Demo</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me with the button"
      />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        Focus Input
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useRef</code> gives you a mutable ref object whose{" "}
        <code>.current</code> property can store DOM nodes or any value.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        To access DOM elements directly (e.g., focusing) or keep track of
        mutable data without re-renders.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        No, updating a ref does not trigger a re-render.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        For DOM manipulations, storing previous values, or other scenarios where
        you need direct DOM access.
      </p>
    </div>
  );
}

export default RefDemo;
