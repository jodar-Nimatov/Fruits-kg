import React, { useState } from "react";
import Logo from "../../assets/icons/logo.png";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";
import Succes from "../../assets/icons/secces.svg";
import { postData, selectCartItems } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const delivery = useSelector(state => state.cart.delivery);
  const total = useSelector(state => state.cart.total);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+996",
    address: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "phone") {
      const phoneValue = value.replace(/\D/g, ""); // Удаляем все нецифровые символы
      if (phoneValue.startsWith("996") && phoneValue.length <= 12) {
        setFormData((prevState) => ({
          ...prevState,
          [id]: `+${phoneValue}`,
        }));
        setErrors((prevState) => ({
          ...prevState,
          [id]: "",
        }));
      } else if (phoneValue.length <= 9) {
        setFormData((prevState) => ({
          ...prevState,
          [id]: `+996${phoneValue}`,
        }));
        setErrors((prevState) => ({
          ...prevState,
          [id]: "",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          [id]: "Номер телефона должен содержать не более 9 цифр после префикса +996",
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const { name, phone, address } = formData;
    const newErrors = {};
    if (!name) newErrors.name = "Пожалуйста, введите имя.";
    if (!phone || !phone.startsWith("+996") || phone.length !== 13)
      newErrors.phone = "Пожалуйста, введите номер телефона, начинающийся с +996 и содержащий 9 цифр.";
    if (!address) newErrors.address = "Пожалуйста, введите адрес.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const totalPriceAndDelivery = delivery == 200 ? "\n\nДоставка: Обычная 200 сом" : "Доставка: Быстрая 250 сом";

  const textRepresentation = "\n\nТовары:" + items.map(product => {
    return `\n\nID Продукта: ${product.id} \nНазвание: ${product.name} \nЦена: ${product.price} сом \nКилограмм: ${product.quantity} \nИзображение: ${product.image}`});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(postData({
        message: `
        Имя: ${formData.name} \nТелефон: ${formData.phone} \nАдрес: ${formData.address} \nКомментарий: ${formData.description || '.'} ${textRepresentation} ${totalPriceAndDelivery}\n${"Общая сумма: " + total}`
      }))
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

            <button type="submit" >Подтвердить заказ</button>
          </form>
        </div>
      </div>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <img src={Succes} alt="Успешно" />
        <h2>Вы подтвердили свой заказ!</h2>
        <h2>Мы вам позвоним</h2>
      </Modal>
    </div>
  );
};

export default Checkout;
