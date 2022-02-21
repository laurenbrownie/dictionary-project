import "./App.css";
import raccoon from "./original.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={raccoon} className="raccoon-img" alt="raccoon" />
      </header>
    </div>
  );
}

export default App;
