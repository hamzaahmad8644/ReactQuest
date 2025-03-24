import React from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const MemoDemoCode = `
function ExpensiveComputation({ num }) {
  const computedValue = useMemo(() => {
    console.log("Computing expensive value...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num;
    }
    return result;
  }, [num]);

  return <p>Computed Value: {computedValue}</p>;
}

function MemoDemo() {
  const [number, setNumber] = useState(1);

  return (
    <div className="demo-section">
      <ExpensiveComputation num={number} />
      <button onClick={() => setNumber((prev) => prev + 1)}>
        Increase Number
      </button>
    </div>
  );
}
render(<MemoDemo />);
`;

function MemoDemo() {
  return (
    <div className="demo-section">
      <h2>useMemo Demo</h2>

      <p>
        <strong>What it does:</strong> <br />
        <code>useMemo</code> memoizes an expensive calculation result to avoid
        re-computing on every render.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Performance optimization for heavy computations that depend on certain
        inputs.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        It doesn't by itself, but if the dependencies change, the memoized
        function re-runs.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        If you have CPU-intensive tasks that slow down your component when they
        run on every render.
      </p>
    </div>
  );
}

const MemoDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <MemoDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={MemoDemoCode} />
    </div>
  );
};

export default MemoDemoPage;
