import React, { useState } from "react";
import LiveDemo from "../components/LiveDemo";

// Define the interactive MemoComponentDemo code as a string
const MemoComponentDemoCode = `
function ExpensiveComponent({ value }) {
  console.log("ExpensiveComponent rendered");
  return <div>Value: {value}</div>;
}

const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

function MemoComponentDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("This component is memoized");

  return (
    <div className="demo-section">
      <h2>React.memo Interactive Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        <code>React.memo</code> prevents unnecessary re-renders by memoizing the
        component.
      </p>

      <p>
        <strong>Why use it:</strong> <br />
        It improves performance by ensuring the component only re-renders when
        its props change.
      </p>

      <p>
        <strong>Does it cause re-render?</strong> <br />
        No, unless the props change. If the parent re-renders but the props
        remain the same, the memoized component does not re-render.
      </p>

      <p>
        <strong>When to use it:</strong> <br />
        Use <code>React.memo</code> for pure functional components that receive
        the same props frequently and don’t need to re-render every time their
        parent updates.
      </p>

      <p>
        <strong>Test it:</strong> <br />
        Clicking "Increment Counter" updates the counter without re-rendering
        the memoized component. Clicking "Change Text" updates the prop,
        triggering a re-render.
        Open logs to see when the memoized component re-renders.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter ({count})
      </button>
      <button
        onClick={() =>
          setText(
            text === "Memoized!" ? "This component is memoized" : "Memoized!"
          )
        }
      >
        Change Text
      </button>

      <MemoizedExpensiveComponent value={text} />
    </div>
  );
}

render(<MemoComponentDemo />);
`;

function ExpensiveComponent({ value }) {
  console.log("ExpensiveComponent rendered");
  return <div>Value: {value}</div>;
}

const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

function MemoComponentDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("This component is memoized");

  return (
    <div className="demo-section">
      <h2>React.memo Interactive Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        <code>React.memo</code> prevents unnecessary re-renders by memoizing the
        component.
      </p>

      <p>
        <strong>Why use it:</strong> <br />
        It improves performance by ensuring the component only re-renders when
        its props change.
      </p>

      <p>
        <strong>Does it cause re-render?</strong> <br />
        No, unless the props change. If the parent re-renders but the props
        remain the same, the memoized component does not re-render.
      </p>

      <p>
        <strong>When to use it:</strong> <br />
        Use <code>React.memo</code> for pure functional components that receive
        the same props frequently and don’t need to re-render every time their
        parent updates.
      </p>

      <p>
        <strong>Test it:</strong> <br />
        Clicking "Increment Counter" updates the counter without re-rendering
        the memoized component. Clicking "Change Text" updates the prop,
        triggering a re-render. Open logs to see when the memoized component
        re-renders.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter ({count})
      </button>
      <button
        onClick={() =>
          setText(
            text === "Memoized!" ? "This component is memoized" : "Memoized!"
          )
        }
      >
        Change Text
      </button>

      <MemoizedExpensiveComponent value={text} />
    </div>
  );
}

const MemoComponentDemoPage = () => {
  return (
    <div className="demo-with-live">
      <MemoComponentDemo />
      <LiveDemo code={MemoComponentDemoCode} />
    </div>
  );
};

export default MemoComponentDemoPage;
