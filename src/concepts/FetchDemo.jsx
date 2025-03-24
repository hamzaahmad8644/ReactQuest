import React, { useState, useEffect } from "react";

function FetchDemo() {
  // State for storing data, loading state, and error state.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="demo-section">
      <h2>Fetch API Demo</h2>
      <p>
        <strong>What it does:</strong> <br />
        This component fetches data from a public API using the{" "}
        <code>fetch</code> method.
      </p>
      <p>
        <strong>Usage:</strong> <br />
        It uses <code>useEffect</code> to fetch data on mount and stores the
        results in state.
      </p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Body:</strong> {data.body}
          </p>
        </div>
      )}
    </div>
  );
}

export default FetchDemo;
