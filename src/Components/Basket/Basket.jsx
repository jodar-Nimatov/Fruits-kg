import React, { useState } from "react";
import "./Basket.scss";
import Logo from "../../assets/icons/logo.png";
import BasketItem from "../BasketItem/BasketItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDelToCart, selectCartItems, selectCartStatus, selectCartTotalPrice } from "../../features/cartSlice";

const Basket = () => {
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const status = useSelector(selectCartStatus);
  const totalPrice = useSelector(selectCartTotalPrice);
  const delivery = useSelector(state => state.cart.delivery);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(200);

  const handleRadioChange = (e) => {
    setSelectedOption(+e.target.value)
    dispatch(addDelToCart(+e.target.value));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

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
            {items.map(item => (
              <BasketItem key={item.id} item={item} />
            ))}
          </div>
          <div className="delivery">
            <div>
              <input
                type="radio"
                id="normalDelivery"
                name="option"
                defaultChecked
                value={200}
                checked={selectedOption === 200}
                onChange={handleRadioChange}
              />
              <label htmlFor="normalDelivery" >Доставка 200 <span className="som">c</span></label>
            </div>
            <br />
            <div>
              <input
                type="radio"
                id="quickDelivery"
                name="option"
                value={250}
                checked={selectedOption === 250}
                onChange={handleRadioChange}
              />
              <label htmlFor="quickDelivery">Быстрая доставка 250 <span className="som">c</span></label>
            </div>
          </div>
        </div>
        <div className="Basket-checkout">
          <section className="Basket-checkout-totalPrice">
            <h3>Итого</h3>
            <p>{totalPrice} <span className="som">c</span></p>
          </section>
          <section>
            <button className="Basket-checkout-btn" onClick={() => navigate("/Checkout")} disabled={delivery == 0 && totalPrice > 250}>
              Оформить заказ
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Basket;
