import React, { useState } from "react";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import "./LiveDemo.css";

const scope = { React, useState, render: (element) => element };

const LiveDemo = ({ code }) => {
  return (
    <LiveProvider code={code} scope={scope} noInline={true}>
      <div className="live-demo-container">
        <div className="live-editor">
          <LiveEditor />
        </div>

        <div className="live-preview">
          <LivePreview />
        </div>
      </div>
      <LiveError className="live-error" />
    </LiveProvider>
  );
};

export default LiveDemo;
