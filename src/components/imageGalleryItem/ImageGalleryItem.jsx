import React from 'react';
import '../styles/styles.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(image)}>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

PropTypes.ImageGalleryItem = {
  image: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
