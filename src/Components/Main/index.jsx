import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";
import Mainlogo from "../../assets/icons/mainlogo.svg";
import "./main.scss";

const Index = () => {
  return (
    <>
      <div className='main-back'>
        <div className="main-page">
          <div className="container">
            <Header />
            <div className="block-content">
              <div className="main-logo-container">
                <div className="main-logo">
                  <img src={Mainlogo} alt="Logo" />
                </div>
              </div>
              <div className="main-text">
                <h1>
                  Насладитесь свежестью и вкусом наших фруктов и овощей,
                  приготовленных с любовью и заботой о вашем здоровье!
                </h1>
              </div>
              <div className="main-address">
                <h3>
                  <strong>Адрес:</strong> <br/>
                  Сары Ɵзɵн
                </h3>
              </div>
              <div className="main-button">
                <Link to="/menu">
                  <button>Каталог </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
