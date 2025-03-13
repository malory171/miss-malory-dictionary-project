import React, { useState } from "react";

export default function SearchEngine() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${word}`);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type here..."
          onChange={handleWordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
