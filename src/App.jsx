import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Main from "./Components/Main";
import "./App.scss";
import ItemDetail from "./Components/ItemCard/itemDetails";
import Basket from "./Components/Basket/Basket";
import Checkout from "./Components/CheckoutPage/Checkout";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/item/:id" element={<ItemDetail />}/>
        <Route path="/Basket" element={<Basket />}/>
        <Route path="/Checkout" element={<Checkout />}/>
      </Routes>
    </Router>
  );
}

export default App;
