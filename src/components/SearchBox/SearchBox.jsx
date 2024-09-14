import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>

      <input
        className={css.input}
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
