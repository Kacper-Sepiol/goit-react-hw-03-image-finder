import React from 'react';
import '../styles/styles.css';

const Button = ({ onClick, image, loading, mImages }) => {
  if (image.length === 0) return null;

  return (
    <button
      className="Button"
      onClick={onClick}
      disabled={image.length >= mImages || loading}
    >
      Load more
    </button>
  );
};

export default Button;
