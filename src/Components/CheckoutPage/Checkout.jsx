import React, { useState } from "react";
import Logo from "../../assets/icons/logo.png";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Modal from "./modal"; // Импорт модального окна
import Succes from "../../assets/icons/secces.svg";

const Checkout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+996",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [id]: "", // Убираем ошибку при изменении поля
    }));
  };

  const validateForm = () => {
    const { name, phone, address } = formData;
    const newErrors = {};
    if (!name) newErrors.name = "Пожалуйста, введите имя.";
    if (!phone || !phone.startsWith("+996") || phone.length < 7)
      newErrors.phone =
        "Пожалуйста, введите номер телефона, начинающийся с +996.";
    if (!address) newErrors.address = "Пожалуйста, введите адрес.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
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
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}

            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="error-message">{errors.phone}</div>
            )}

            <label htmlFor="address">Адрес</label>
            <input
              id="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <div className="error-message">{errors.address}</div>
            )}

            <label htmlFor="description">Комментарий к заказу</label>
            <input
              id="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
            />

            <button type="submit">Подтвердить заказ</button>
          </form>
        </div>
      </div>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <img src={Succes} alt="" />
        <h2>Вы подтвердили свой заказ!</h2>
      </Modal>
    </div>
  );
};

export default Checkout;
