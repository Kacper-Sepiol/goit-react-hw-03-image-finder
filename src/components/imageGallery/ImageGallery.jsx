import React from 'react';
import '../styles/styles.css';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
