// src/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Create a slice with an initial state and reducers
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    // The reducer logic is written in an immutable-friendly way using Immer
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export the action creators and the reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
