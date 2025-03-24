import React from "react";

function LazyComponent() {
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <p>
        This is a heavy widget loaded lazily! It could be an analytics chart, a
        user profile, or any complex component.
      </p>
    </div>
  );
}

export default LazyComponent;
