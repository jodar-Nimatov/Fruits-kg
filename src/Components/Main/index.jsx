import React from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";
import Mainlogo from "../../assets/icons/mainlogo.svg";
import "./main.scss";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
     <Helmet>
        <title>Адик Маркет - Фрукты и Овощи</title>

        <meta
          name="description"
          content="Адик Маркет - Насладитесь свежестью и вкусом наших фруктов и овощей, приготовленных с любовью и заботой о вашем здоровье!"
        />
        <meta
          name="keywords"
          content="Адик Маркет, фрукты, овощи, свежие фрукты, свежие овощи, здоровое питание"
        />
      </Helmet>
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
