import '../styles/styles.css';

const SearchBar = ({ submit }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={submit}>
      <button type="submit" className="SearchForm-button">
        <span className="button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default SearchBar;
