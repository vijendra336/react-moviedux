import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header> </Header>
      </div>

      <footer className="footer">
        <p className="footer">
          Footer Content :Copyright © 2026 MovieDux. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
