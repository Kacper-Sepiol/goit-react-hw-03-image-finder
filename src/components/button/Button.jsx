import React from 'react';
import '../styles/styles.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  mImages: PropTypes.number.isRequired,
};

export default Button;
