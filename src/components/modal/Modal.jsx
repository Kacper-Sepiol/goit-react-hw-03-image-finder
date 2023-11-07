import React from 'react';
import '../styles/styles.css';
import PropTypes from 'prop-types';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

PropTypes.Modal = {
  image: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
