import '../styles/styles.css';

const SearchBar = ({ submit }) => {
  <header className="searchbar">
    <form className="form" onSubmit={this.handleSubmit}>
      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.query}
        onChange={this.handleInputChange}
      />

      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
    </form>
  </header>;
};

export default SearchBar;
