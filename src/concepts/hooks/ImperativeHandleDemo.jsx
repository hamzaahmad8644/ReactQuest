import React, { useRef, useImperativeHandle, forwardRef } from "react";

import LiveDemo from "../../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const ImperativeHandleDemoCode = `
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Custom focus invoked");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Custom Input" />;
});

function ImperativeHandleDemo() {
  const customInputRef = useRef(null);

  return (
    <div className="demo-section">
      <h2>useImperativeHandle Demo</h2>

      <CustomInput ref={customInputRef} />
      <button
        onClick={() => customInputRef.current && customInputRef.current.focus()}
      >
        Focus Custom Input
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useImperativeHandle</code> customizes the ref exposed to parent
        components when using <code>forwardRef</code>.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Lets the child expose specific methods to the parent, rather than the
        entire DOM node.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Calling the methods doesn’t trigger re-renders unless you update state.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        Rarely, in advanced scenarios where you need to imperatively control a
        child component.
      </p>
    </div>
  );
}
render(<ImperativeHandleDemo />);
`;

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Custom focus invoked");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Custom Input" />;
});

function ImperativeHandleDemo() {
  const customInputRef = useRef(null);

  return (
    <div className="demo-section">
      <h2>useImperativeHandle Demo</h2>

      <CustomInput ref={customInputRef} />
      <button
        onClick={() => customInputRef.current && customInputRef.current.focus()}
      >
        Focus Custom Input
      </button>

      <p>
        <strong>What it does:</strong> <br />
        <code>useImperativeHandle</code> customizes the ref exposed to parent
        components when using <code>forwardRef</code>.
      </p>
      <p>
        <strong>Why use it:</strong> <br />
        Lets the child expose specific methods to the parent, rather than the
        entire DOM node.
      </p>
      <p>
        <strong>Does it cause re-render?:</strong> <br />
        Calling the methods doesn’t trigger re-renders unless you update state.
      </p>
      <p>
        <strong>When to use it:</strong> <br />
        Rarely, in advanced scenarios where you need to imperatively control a
        child component.
      </p>
    </div>
  );
}

const ImperativeHandleDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <ImperativeHandleDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={ImperativeHandleDemoCode} />
    </div>
  );
};

export default ImperativeHandleDemoPage;
