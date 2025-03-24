import React from "react";

import LiveDemo from "../components/LiveDemo";

// Define your FragmentsDemo component's code as a string
const LocalStorageDemoCode = `
function LocalStorageDemo() {
  // Local state for new key and value inputs.
  const [inputKey, setInputKey] = useState("");
  const [inputValue, setInputValue] = useState("");
  // Local state for removal input and error message.
  const [removeKey, setRemoveKey] = useState("");
  const [removeError, setRemoveError] = useState("");
  // State to store all key/value pairs from localStorage.
  const [items, setItems] = useState([]);

  // Function to load all key/value pairs from localStorage.
  const loadItems = () => {
    let result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      result.push({ key, value });
    }
    setItems(result);
  };

  // Load items when the component mounts.
  useEffect(() => {
    loadItems();
  }, []);

  // Handle adding a new key/value pair.
  const handleAdd = () => {
    if (inputKey.trim() !== "") {
      localStorage.setItem(inputKey, inputValue);
      loadItems();
      setInputKey("");
      setInputValue("");
      setRemoveError(""); // Clear any removal error.
    }
  };

  // Handle removing an item by key.
  const handleRemove = () => {
    if (removeKey.trim() !== "") {
      // Check if the key exists in localStorage.
      const item = localStorage.getItem(removeKey);
      if (item === null) {
        // If not found, set an error message.
        setRemoveError(\`Key "\${removeKey}" not found.\`);
      } else {
        // If found, remove the item.
        localStorage.removeItem(removeKey);
        loadItems();
        setRemoveKey("");
        setRemoveError(""); // Clear error if removal is successful.
      }
    }
  };

  return (
    <div className="demo-section">
      <div>
        <input
          type="text"
          placeholder="Enter key"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div style={{ marginTop: "1em" }}>
        <input
          type="text"
          placeholder="Enter key to remove"
          value={removeKey}
          onChange={(e) => setRemoveKey(e.target.value)}
        />
        <button onClick={handleRemove}>Remove</button>
        {/* Show removal error message if present */}
        {removeError && (
          <p style={{ color: "red", marginTop: "0.5em" }}>{removeError}</p>
        )}
        {/* Also show message when there are no items at all */}
        {items.length === 0 && (
          <p style={{ color: "red", marginTop: "0.5em" }}>No keys available.</p>
        )}
      </div>
      <h3>Saved Items:</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              <strong>{item.key}:</strong> {item.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items stored.</p>
      )}
    </div>
  );
}

render(<LocalStorageDemo />);
`;

function LocalStorageDemo() {
  return (
    <div className="demo-section">
      <h2>Multi LocalStorage Demo</h2>
      <p>
        This demo allows you to add multiple key/value pairs to localStorage and
        view them in a list. To remove an item, type its key and click "Remove".
      </p>
    </div>
  );
}

const LocalStorageDemoPage = () => {
  return (
    <div className="demo-with-live">
      {/* Render the live preview */}
      <LocalStorageDemo />
      {/* Render the interactive code editor */}
      <LiveDemo code={LocalStorageDemoCode} />
    </div>
  );
};

export default LocalStorageDemoPage;
