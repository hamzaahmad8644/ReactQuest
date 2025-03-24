// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the slice reducer here
  },
});

export default store;
