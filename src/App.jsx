import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// Basic Hook Demos (from simple to advanced):
import StateDemoPage from "./concepts/hooks/StateDemo";
import EffectDemo from "./concepts/hooks/EffectDemo";
import ContextDemo from "./concepts/hooks/ContextDemo";
import ReducerDemo from "./concepts/hooks/ReducerDemo";
import RefDemo from "./concepts/hooks/RefDemo";
import MemoDemo from "./concepts/hooks/MemoDemo";
import CallbackDemo from "./concepts/hooks/CallbackDemo";
import LayoutEffectDemo from "./concepts/hooks/LayoutEffectDemo";
import ImperativeHandleDemo from "./concepts/hooks/ImperativeHandleDemo";
import DebugValueDemo from "./concepts/hooks/DebugValueDemo";
import TransitionDemo from "./concepts/hooks/TransitionDemo";

// Custom hooks
import CustomHookDemo from "./concepts/hooks/custom/CustomHookDemo";

// Additional React Concept Components
import FragmentsDemoPage from "./concepts/FragmentsDemo";
import LocalStorageDemo from "./concepts/LocalStorageDemo";
import ErrorBoundaryDemo from "./concepts/ErrorBoundaryDemo";
import MemoComponentDemo from "./concepts/MemoComponentDemo"; // React.memo example
import HigherOrderComponentDemo from "./concepts/HigherOrderComponentDemo";
import RenderPropsDemo from "./concepts/RenderPropsDemo";
import LazyLoadingDemo from "./concepts/LazyLoadingDemo";
import ReduxToolkitDemo from "./concepts/ReduxToolkitDemo"; // Redux Toolkit demo

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Basic Hooks */}
          <Route path="/state" element={<StateDemoPage />} />
          <Route path="/effect" element={<EffectDemo />} />
          <Route path="/context" element={<ContextDemo />} />
          <Route path="/reducer" element={<ReducerDemo />} />
          <Route path="/ref" element={<RefDemo />} />
          <Route path="/memo" element={<MemoDemo />} />
          <Route path="/callback" element={<CallbackDemo />} />
          <Route path="/layouteffect" element={<LayoutEffectDemo />} />
          <Route path="/imperativehandle" element={<ImperativeHandleDemo />} />
          <Route path="/debugvalue" element={<DebugValueDemo />} />
          <Route path="/transition" element={<TransitionDemo />} />
          <Route path="/customhook" element={<CustomHookDemo />} />

          {/* Additional Concepts */}
          <Route path="/fragments" element={<FragmentsDemoPage />} />
          <Route path="/uselocalstorage" element={<LocalStorageDemo />} />
          <Route path="/errorboundary" element={<ErrorBoundaryDemo />} />
          <Route path="/memocomponent" element={<MemoComponentDemo />} />
          <Route path="/hoc" element={<HigherOrderComponentDemo />} />
          <Route path="/renderprops" element={<RenderPropsDemo />} />
          <Route path="/lazy" element={<LazyLoadingDemo />} />
          <Route path="/redux" element={<ReduxToolkitDemo />} />

          {/* Default Route */}
          <Route path="/" element={<div>Select a demo from the menu.</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
