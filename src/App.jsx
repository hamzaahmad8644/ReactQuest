import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// Basic Hook Demos (from simple to advanced):
import StateDemoPage from "./concepts/hooks/StateDemo";
import EffectDemoPage from "./concepts/hooks/EffectDemo";
import ContextDemoPage from "./concepts/hooks/ContextDemo";
import ReducerDemoPage from "./concepts/hooks/ReducerDemo";
import RefDemoPage from "./concepts/hooks/RefDemo";
import MemoDemoPage from "./concepts/hooks/MemoDemo";
import CallbackDemoPage from "./concepts/hooks/CallbackDemo";
import LayoutEffectDemoPage from "./concepts/hooks/LayoutEffectDemo";
import ImperativeHandleDemoPage from "./concepts/hooks/ImperativeHandleDemo";
import DebugValueDemoPage from "./concepts/hooks/DebugValueDemo";
import TransitionDemoPage from "./concepts/hooks/TransitionDemo";

// Custom hooks
import CustomHookDemoPage from "./concepts/hooks/custom/CustomHookDemo";

// Additional React Concept Components
import FetchDemoPage from "./concepts/FetchDemo";
import FragmentsDemoPage from "./concepts/FragmentsDemo";
import LocalStorageDemoPage from "./concepts/LocalStorageDemo";
import ErrorBoundaryDemoPage from "./concepts/ErrorBoundaryDemo";
import MemoComponentDemoPage from "./concepts/MemoComponentDemo"; // React.memo example
import HigherOrderComponentDemoPage from "./concepts/HigherOrderComponentDemo";
import PortalsDemoPage from "./concepts/PortalsDemo";
import RenderPropsDemoPage from "./concepts/RenderPropsDemo";
import LazyLoadingDemoPage from "./concepts/LazyLoadingDemo";
import ReduxToolkitDemoPage from "./concepts/ReduxToolkitDemo"; // Redux Toolkit demo

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Basic Hooks */}
          <Route path="/state" element={<StateDemoPage />} />
          <Route path="/effect" element={<EffectDemoPage />} />
          <Route path="/context" element={<ContextDemoPage />} />
          <Route path="/reducer" element={<ReducerDemoPage />} />
          <Route path="/ref" element={<RefDemoPage />} />
          <Route path="/memo" element={<MemoDemoPage />} />
          <Route path="/callback" element={<CallbackDemoPage />} />
          <Route path="/layouteffect" element={<LayoutEffectDemoPage />} />
          <Route
            path="/imperativehandle"
            element={<ImperativeHandleDemoPage />}
          />
          <Route path="/debugvalue" element={<DebugValueDemoPage />} />
          <Route path="/transition" element={<TransitionDemoPage />} />
          <Route path="/customhook" element={<CustomHookDemoPage />} />

          {/* Additional Concepts */}
          <Route path="/fragments" element={<FragmentsDemoPage />} />
          <Route path="/fetch" element={<FetchDemoPage />} />
          <Route path="/uselocalstorage" element={<LocalStorageDemoPage />} />
          <Route path="/errorboundary" element={<ErrorBoundaryDemoPage />} />
          <Route path="/memocomponent" element={<MemoComponentDemoPage />} />
          <Route path="/portals" element={<PortalsDemoPage />} />
          <Route path="/hoc" element={<HigherOrderComponentDemoPage />} />
          <Route path="/renderprops" element={<RenderPropsDemoPage />} />
          <Route path="/lazy" element={<LazyLoadingDemoPage />} />
          <Route path="/redux" element={<ReduxToolkitDemoPage />} />

          {/* Default Route */}
          <Route path="/" element={<div>Select a demo from the menu.</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
