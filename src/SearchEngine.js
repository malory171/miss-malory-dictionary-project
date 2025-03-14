import React, { useState } from "react";

export default function SearchEngine() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="SearchEngine mt-4">
      <form onSubmit={handleSubmit}>
        <input
          className="m-2"
          type="search"
          placeholder="Type here..."
          onChange={handleWordChange}
        />
        <input className="m-2" type="submit" value="Search" />
      </form>
    </div>
  );
}
