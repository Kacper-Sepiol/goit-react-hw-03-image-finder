import React from 'react';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.query.value);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
      <input
        className="SearchForm-input"
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default Searchbar;
