import { Router } from "@reach/router";
import Home from "./Components/welcome";
import "./App.css";
import Number from "./Components/number";
import Words from "./Components/words";
import Wordspath from "./Components/wordspath";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:id" />
        <Words path="/:string" />
        <Wordspath path="/:word/:word2/:word3" />
      </Router>
    </div>
  );
}

export default App;
