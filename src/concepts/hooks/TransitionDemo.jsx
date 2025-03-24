import React from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const TransitionDemoCode = `
function TransitionDemo() {
  // useTransition returns a boolean (isPending) and a function (startTransition)
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  // Handle input changes and defer the heavy work of filtering a large list
  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      // Simulate heavy work: generate and filter a large list
      const newList = Array.from(
        { length: 10000 },
        (_, i) => \`Item \${i}\`
      ).filter((item) => item.includes(e.target.value));
      setList(newList);
    });
  };

  return (
    <div className="demo-section">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to filter..."
      />
      {isPending && <p>Updating list...</p>}
      <ul>
        {list.slice(0, 20).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
render(<TransitionDemo />);
`;

function TransitionDemo() {
  return (
    <div className="demo-section">
      <h2>useTransition Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        <code>useTransition</code> lets you mark state updates as non-urgent so
        that urgent updates remain responsive.
      </p>
      <p>
        <strong>Usage:</strong> <br />
        In this demo, filtering through a large list is deferred using{" "}
        <code>startTransition</code> to keep the UI responsive.
      </p>
    </div>
  );
}

const TransitionDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <TransitionDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={TransitionDemoCode} />
    </div>
  );
};

export default TransitionDemoPage;
