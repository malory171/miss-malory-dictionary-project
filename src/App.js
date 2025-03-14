import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header text-center mt-2 p-2">
        <h1>Dictionary</h1>
        <h2>Type a word to know its meaning </h2>
        <SearchEngine />
      </header>
      <main />
      <footer className="m-2 text-center">
        <p>
          Coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/135692-malory-mezierre"
            target="_blank"
            rel="noreferrer"
          >
            Miss Malory <span>📖</span>
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/malory171/miss-malory-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://missmalory-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
