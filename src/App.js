import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>lauren's dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="book" />
        </main>
        <footer className="App-footer">
          <small>
            📚 coded by{" "}
            <a
              href="https://github.com/laurenbrownie/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              lauren brown
            </a>{" "}
            👩🏼‍💻 images from{" "}
            <a href="https://pexels.com" target="_blank" rel="noreferrer">
              pexels
            </a>{" "}
            📸 hosted on{" "}
            <a href="https://app.netlify.com" target="_blank" rel="noreferrer">
              netlify
            </a>{" "}
            🌿
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
