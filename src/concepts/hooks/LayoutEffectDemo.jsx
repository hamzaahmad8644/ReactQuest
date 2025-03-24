import React from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const LayoutEffectDemoCode = `
function LayoutEffectDemo() {
  const boxRef = useRef(null);
  const [measuredWidth, setMeasuredWidth] = useState(0);

  // States for user-controlled properties
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [bgColor, setBgColor] = useState("#e0e0e0");

  // useLayoutEffect runs synchronously after DOM updates.
  // Here, whenever the controlled width changes, we re-measure the box.
  useLayoutEffect(() => {
    if (boxRef.current) {
      setMeasuredWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, [width, height, bgColor]); // re-run if any property affecting layout changes

  return (
    <div className="demo-section">
      {/* The box whose dimensions we control */}
      <div
        ref={boxRef}
        className="box"
        style={{
          width: \`\${width}px\`,
          height: \`\${height}px\`,
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Box
      </div>
      <p>Measured box width: {measuredWidth}px</p>

      {/* Controls */}
      <div className="controls">
        <label>
          Box Width:
          <input
            type="range"
            min="100"
            max="500"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
          {width}px
        </label>
        <br />
        <label>
          Box Height:
          <input
            type="range"
            min="50"
            max="300"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          {height}px
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
render(<LayoutEffectDemo />);
`;

function LayoutEffectDemo() {
  return (
    <div className="demo-section">
      <h2>useLayoutEffect Demo</h2>
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

const LayoutEffectDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <LayoutEffectDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={LayoutEffectDemoCode} />
    </div>
  );
};

export default LayoutEffectDemoPage;
