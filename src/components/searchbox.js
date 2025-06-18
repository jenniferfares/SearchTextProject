import React, { useState } from "react";
import "./searchbox.css";

function highlightText(text, highlight) {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? <mark key={index}>{part}</mark> : part
  );
}

const SearchBox = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(({ title, content }) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowerSearch) ||
      content.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="search-container">
      <h1>Search</h1>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="clear-button"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <p className="results-count">
        <strong>{filteredArticles.length} posts</strong> were found.
      </p>

      {filteredArticles.map(({ id, title, date, content }) => (
        <div key={id} className="article">
          <h2>{highlightText(title, searchTerm)}</h2>
          <p className="date">{date}</p>
          <p>{highlightText(content, searchTerm)}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBox;
