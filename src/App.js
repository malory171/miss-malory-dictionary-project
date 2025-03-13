import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dictionary</h1>
        <p>Type a word to know its meaning </p>
        <SearchEngine />
      </header>
      <main />
      <footer>Coded by Miss Malory, open-sourced on GitHub</footer>
    </div>
  );
}

export default App;
