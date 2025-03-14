import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
    //documentation:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
