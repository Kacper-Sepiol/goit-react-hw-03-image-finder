import React from 'react';
import '../styles/styles.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
