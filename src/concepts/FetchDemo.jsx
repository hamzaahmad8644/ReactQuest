import React from "react";
import LiveDemo from "../components/LiveDemo";

// Define your FetchDemo component's code as a string
const FetchDemoCode = `
function FetchDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [slug, setSlug] = useState("1");

  const fetchData = (slug) => {
    setLoading(true);
    setError(null);
    
    fetch(\`https://jsonplaceholder.typicode.com/posts/\${slug}\`)
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
  };

  useEffect(() => {
    fetchData(slug);
  }, []);

  return (
    <div className="demo-section">
      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Enter post ID..."
      />
      <button onClick={() => fetchData(slug)}>Fetch Again</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
        </div>
      )}
    </div>
  );
}

render(<FetchDemo />);
`;

function FetchDemo() {
  return (
    <div className="demo-section">
      <h2>Fetch API Demo</h2>
      <p>
        <strong>What it does:</strong> Fetches data from an API.
      </p>
    </div>
  );
}

const FetchDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <FetchDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={FetchDemoCode} />
    </div>
  );
};

export default FetchDemoPage;
