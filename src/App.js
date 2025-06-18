import React from "react";
import SearchBox from "./components/searchbox";
import articles from "./articles/articles";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div style={{ display: "flex", padding: "40px", justifyContent: "space-between" }}>
      <div style={{ flex: 2 }}>
        <SearchBox articles={articles} />
      </div>
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
