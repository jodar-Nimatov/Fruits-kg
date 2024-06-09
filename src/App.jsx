import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
import "./App.scss";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
    </Router>
  );
}

export default App;
