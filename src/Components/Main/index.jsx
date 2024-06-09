import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";
import Mainlogo from "../../assets/icons/mainlogo.svg"
import "./main.scss"

const index = () => {
  return (
    <>
    <div className="main-back">
    <div className="main-page">
      <div className="container">
        <Header />
        <button><Link to="/menu">Каталог </Link></button>
        <div className="main-logo-container">
          <div className="main-logo">
          <img src={Mainlogo} alt="" />
          </div>
        </div>
        <div className="main-left"></div>
        <div className="main-right"></div>
      </div>
    </div>
    </div>
    </>
  );
};

export default index;
