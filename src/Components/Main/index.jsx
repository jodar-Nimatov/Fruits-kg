import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";

const index = () => {
  return (
      <div className="main-menu">
        <div className="container">
          <Header />
          <Link to="/menu">Каталог </Link>
          <div className="main-logo"></div>
          <div className="main-left"></div>
          <div className="main-right"></div>
        </div>
      </div>
  );
};

export default index;
