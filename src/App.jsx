import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Main from "./Components/Main";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <nav>
          
        </nav>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
