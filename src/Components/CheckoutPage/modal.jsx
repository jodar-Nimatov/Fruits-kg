import React, { useEffect } from 'react';
import './modal.scss';
import Succes from "../../assets/icons/secces.svg"

const Modal = ({ closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal(); // Закрытие модального окна через 5 секунд
    }, 5000);

    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={Succes} alt="" />
        <p>Ваш заказ подтвержден!</p>
      </div>
    </div>
  );
};

export default Modal;
