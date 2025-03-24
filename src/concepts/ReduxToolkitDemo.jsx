// src/components/ReduxToolkitDemo.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

function ReduxToolkitDemo() {
  // useSelector extracts the current count from the store's state
  const count = useSelector((state) => state.counter.count);
  // useDispatch returns the store's dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="demo-section">
      <h2>Redux Toolkit Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        This component uses Redux Toolkit for state management with a simple
        counter.
      </p>
      <p>
        <strong>Usage:</strong> <br />
        It uses <code>useSelector</code> to access state and{" "}
        <code>useDispatch</code> to update the state via actions.
      </p>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default ReduxToolkitDemo;
