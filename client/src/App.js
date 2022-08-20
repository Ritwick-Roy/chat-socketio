import "./App.css";
import Chat from "./Chat";
import Home from "./Home";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1><Link to="/">Chat</Link></h1>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <footer>
          <p>
            Made with{" "}
            <span role="img" aria-label="React">
              ❤️
            </span>{" "}
            by <a href="https://github.com/ritwick-roy">Ritwick</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
