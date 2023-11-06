import React from 'react';
import '../styles/styles.css';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(image)}>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
