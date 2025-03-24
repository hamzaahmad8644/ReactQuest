import React, { useReducer } from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const ReducerDemoCode = `function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="demo-section">
      <h2>useReducer Demo</h2>

      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useReducer</code> manages state using a reducer function, similar
        to Redux patterns.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Great for complex state logic or when transitions depend on previous
        state.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Yes, dispatching an action updates state and re-renders the component.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        If your state logic becomes too complicated for simple{" "}
        <code>useState</code>.
      </p>
    </div>
  );
}
render(<ReducerDemo />);
`;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="demo-section">
      <h2>useReducer Demo</h2>

      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useReducer</code> manages state using a reducer function, similar
        to Redux patterns.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Great for complex state logic or when transitions depend on previous
        state.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Yes, dispatching an action updates state and re-renders the component.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        If your state logic becomes too complicated for simple{" "}
        <code>useState</code>.
      </p>
    </div>
  );
}

const ReducerDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <ReducerDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={ReducerDemoCode} />
    </div>
  );
};

export default ReducerDemoPage;
