const SearchBar = () => (
  <header class="searchBar">
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default SearchBar;
