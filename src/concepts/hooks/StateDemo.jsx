import React from "react";
import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const StateDemoCode = `
function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-section">
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

    </div>
  );
}
render(<StateDemo />);
`;

function StateDemo() {
  return (
    <div className="demo-section">
      <h2>useState Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        <code>useState</code> lets you add and manage local state in function
        components.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Perfect for simple or moderately complex state that only affects one
        component.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Yes, whenever you call the state updater function, React re-renders this
        component.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        Anytime you need to track or update local data (e.g., counters, form
        inputs).
      </p>
    </div>
  );
}

const StateDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <StateDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={StateDemoCode} />
    </div>
  );
};

export default StateDemoPage;
