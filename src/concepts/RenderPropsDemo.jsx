import React from "react";

import LiveDemo from "../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const RenderPropsDemoCode = `
// A component using render props to share state/behavior.
class RenderPropsComponent extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return this.props.render(this.state.count, this.increment);
  }
}

function RenderPropsDemo() {
  return (
    <div className="demo-section">
      <RenderPropsComponent
        render={(count, increment) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment Count</button>
          </div>
        )}
      />
    </div>
  );
}
render(<RenderPropsDemo />);
`;

function RenderPropsDemo() {
  return (
    <div className="demo-section">
      <h2>Render Props Demo</h2>
      <p>
        <strong>What it does:</strong> <br />A render props component shares
        state or behavior by passing a function as a prop.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        It allows for flexible code reuse and dynamic UI rendering.
      </p>
    </div>
  );
}

const RenderPropsDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <RenderPropsDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={RenderPropsDemoCode} />
    </div>
  );
};

export default RenderPropsDemoPage;
