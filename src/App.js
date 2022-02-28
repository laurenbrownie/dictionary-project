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
          <small>coded by lauren brown</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
