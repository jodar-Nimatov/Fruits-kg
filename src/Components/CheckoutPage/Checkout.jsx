import React, { useState } from "react";
import Logo from "../../assets/icons/logo.png";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Modal from "./modal.jsx";

const Checkout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.Name.value.trim();
    const phone = e.target.elements.Phone.value.trim();
    const address = e.target.elements.address.value.trim();

    if (!name) {
        setErrorMessages(prevState => ({
          ...prevState,
          name: 'Введите имя'
        }));
        return;
      } else {
        setErrorMessages(prevState => ({
          ...prevState,
          name: '' // Очистить сообщение об ошибке, если поле заполнено
        }));
      }
  
      if (!phone) {
        setErrorMessages(prevState => ({
          ...prevState,
          phone: 'Введите телефон'
        }));
        return;
      } else {
        setErrorMessages(prevState => ({
          ...prevState,
          phone: '' // Очистить сообщение об ошибке, если поле заполнено
        }));
      }
  
      
  
      if (!address) {
        setErrorMessages(prevState => ({
          ...prevState,
          address: 'Введите адрес'
        }));
        return;
      } else {
        setErrorMessages(prevState => ({
          ...prevState,
          address: '' // Очистить сообщение об ошибке, если поле заполнено
        }));
      }
  
     
  
      // Если все поля заполнены и телефон имеет правильный формат, открыть модальное окно
      setIsModalOpen(true);
    };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout-header">
          <section>
            <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
          </section>
          <section>
            <span>
              <h3>Оформить заказ</h3>
            </span>
            <span>
              <h3 onClick={() => navigate("/Menu")}>Каталог</h3>
            </span>
          </section>
        </div>
        <div className="Checkout-inner">
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Имя</label>
            <input id="Name" type="text" />
            {errorMessages.name && <span className="error-message">{errorMessages.name}</span>}

            <label htmlFor="Phone">Телефон</label>
            <input id="Phone" type="tel" />
            {errorMessages.phone && (
              <span className="error-message">{errorMessages.phone}</span>
            )}
            <label htmlFor="address">Адрес</label>
            <input id="address" type="text" />
            {errorMessages.address && (
              <span className="error-message">{errorMessages.address}</span>
            )}
            <label htmlFor="description">Комментарий к заказу</label>
            <input id="description" type="text" />
            <button type="submit">Подтвердить заказ</button>
          </form>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Checkout;
