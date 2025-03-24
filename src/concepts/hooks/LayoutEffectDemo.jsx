import React, { useRef, useState, useLayoutEffect } from "react";

function LayoutEffectDemo() {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div className="demo-section">
      <h2>useLayoutEffect Demo</h2>

      <div
        ref={boxRef}
        className="box"
        style={{ width: "200px", height: "100px", backgroundColor: "#e0e0e0" }}
      >
        Box
      </div>
      <p>Measured box width: {boxWidth}px</p>

      <p>
        <strong>What it does:</strong> <br />
        <code>useLayoutEffect</code> runs synchronously after DOM mutations but
        before the browser paints.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Useful for measuring or manipulating the DOM before the user sees the
        changes (e.g., for animations).
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        If you update state in it, yes. It will block painting until the effect
        finishes.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        When you need to measure DOM elements or make layout adjustments before
        the browser repaints.
      </p>
    </div>
  );
}

export default LayoutEffectDemo;
