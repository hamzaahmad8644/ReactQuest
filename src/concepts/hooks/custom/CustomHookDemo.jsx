import React, { useState, useEffect } from "react";

import LiveDemo from "../../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const CustomHookDemoCode = `
// A custom hook that returns the current window width and updates on resize.
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function CustomHookDemo() {
  const width = useWindowWidth();

  return (
    <div className="demo-section">
      <h2>Custom Hook Demo</h2>

      <p>Current window width: {width}px</p>

      <p>
        <strong>What it does:</strong> <br />
        The custom hook <code>useWindowWidth</code> returns the current window
        width and updates it when the window is resized.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Custom hooks allow you to extract and reuse component logic across your
        application.
      </p>
      <p>
        <strong>Usage:</strong> <br />
        This hook abstracts the resize listener logic into a reusable function.
      </p>
    </div>
  );
}
render(<CustomHookDemo />);
`;

// A custom hook that returns the current window width and updates on resize.
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function CustomHookDemo() {
  const width = useWindowWidth();

  return (
    <div className="demo-section">
      <h2>Custom Hook Demo</h2>

      <p>Current window width: {width}px</p>

      <p>
        <strong>What it does:</strong> <br />
        The custom hook <code>useWindowWidth</code> returns the current window
        width and updates it when the window is resized.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Custom hooks allow you to extract and reuse component logic across your
        application.
      </p>
      <p>
        <strong>Usage:</strong> <br />
        This hook abstracts the resize listener logic into a reusable function.
      </p>
    </div>
  );
}

const CustomHookDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <CustomHookDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={CustomHookDemoCode} />
    </div>
  );
};

export default CustomHookDemoPage;
