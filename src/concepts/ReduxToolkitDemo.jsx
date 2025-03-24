// src/components/ReduxToolkitDemo.jsx
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../store/counterSlice";

import LiveDemo from "../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const ReduxToolkitDemoCode = `
// Create a slice with an initial state and reducers
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions
const { increment, decrement } = counterSlice.actions;

// Create store with reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function ReduxToolkitDemo() {
  // useSelector extracts the current count from the store's state
  const count = useSelector((state) => state.counter.count);
  // useDispatch returns the store's dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="demo-section">
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

// Wrap component with Provider for Redux store access
function App() {
  return (
    <Provider store={store}>
      <ReduxToolkitDemo />
    </Provider>
  );
}

render(<App />);
`;

function ReduxToolkitDemo() {
  // // useSelector extracts the current count from the store's state
  // const count = useSelector((state) => state.counter.count);
  // // useDispatch returns the store's dispatch function to dispatch actions
  // const dispatch = useDispatch();

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
      {/* <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
    </div>
  );
}

const ReduxToolkitDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <ReduxToolkitDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={ReduxToolkitDemoCode} />
    </div>
  );
};

export default ReduxToolkitDemoPage;
