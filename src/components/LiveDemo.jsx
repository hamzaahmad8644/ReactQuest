import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useDebugValue,
  useRef,
  useImperativeHandle,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useReducer,
  useTransition,
  Suspense,
} from "react";
import ReactDOM from "react-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import "./LiveDemo.css";

// Define the scope so that React, useState, and render are available in the live code
const scope = {
  React,
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useDebugValue,
  useRef,
  useImperativeHandle,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useReducer,
  useTransition,
  Suspense,
  ReactDOM,
  configureStore,
  createSlice,
  useSelector,
  useDispatch,
  Provider,
  render: (element) => element,
};

const LiveDemo = ({ code: initialCode }) => {
  // Store the current code and maintain an undo stack
  const [code, setCode] = useState(initialCode);
  const [, setUndoStack] = useState([]);

  // When the editor changes, push the current code into the undo stack before updating
  const handleCodeChange = (newCode) => {
    setUndoStack((prevStack) => [...prevStack, code]);
    setCode(newCode);
  };

  // When the undo arrow is clicked, revert to the previous code
  const handleUndo = () => {
    setUndoStack((prevStack) => {
      if (prevStack.length === 0) return prevStack;
      const previousCode = prevStack[prevStack.length - 1];
      setCode(previousCode);
      return prevStack.slice(0, -1);
    });
  };

  return (
    <LiveProvider code={code} scope={scope} noInline={true}>
      {/* Undo Arrow: placed above the live preview */}

      <button className="undo-arrow" onClick={handleUndo}>
        &#8630; Undo
      </button>

      <div className="live-demo-container">
        {/* Live Editor */}
        <div className="live-editor">
          <div className="live-editor-title">Live Editor</div>
          <div>
            <LiveEditor onChange={handleCodeChange} />
          </div>
        </div>
        {/* Live Preview */}
        <div className="live-preview">
          <div className="live-editor-title">Live Result</div>
          <div>
            <LivePreview />
          </div>
        </div>
      </div>
      <LiveError className="live-error" />
    </LiveProvider>
  );
};

export default LiveDemo;
