import React from "react";
import "./Basket.scss";
import Logo from "../../assets/icons/logo.png";
import BasketItem from "../BasketItem/BasketItem";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  return (
    <div className="Basket">
      <div className="container">
        <div className="Basket-header">
          <div className="Basket-header-inner">
            <section>
              <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
            </section>
            <section>
              <span onClick={() => navigate("/menu")}>
                <h2>Каталог</h2>
              </span>
            </section>
          </div>
        </div>
        <div className="Basket-inner">
          <div className="Basket-inner-row">
            <BasketItem />
          </div>

          <div className="delivery">
            <label for="vehicle1">Доставка 200сом</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="delivery"
            />
            <br></br>
            <label for="vehicle2">Быстрый доставка 250сом</label>
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="delivery"
            />
            <br></br>
          </div>
        </div>
        <div className="Basket-checkout">
          <section className="Basket-checkout-totalPrice">
            <h3>Итого</h3>
            <p>10 522.00 com</p>
          </section>
          <section>
            <button
              className="Basket-checkout-btn"
              onClick={() => navigate("/Checkout")}
            >
              Оформить заказ
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Basket;
