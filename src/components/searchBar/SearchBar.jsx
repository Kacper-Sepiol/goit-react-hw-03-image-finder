import css from '../styles/styles.css';

const SearchBar = () => (
  <header className={css.searchBar}>
    <form className="form">
      <button type="submit" className={css.button}>
        <span className="button-label">Search</span>
      </button>

      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default SearchBar;
