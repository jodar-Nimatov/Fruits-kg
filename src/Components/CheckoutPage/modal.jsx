import React from 'react';
import './modal.scss';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modals ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
