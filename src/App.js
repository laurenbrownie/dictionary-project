import "./App.css";
import raccoon from "./original.jpeg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>lauren's dictionary</h1>
          <img src={raccoon} className="raccoon-img" alt="raccoon" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>coded by lauren brown</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
