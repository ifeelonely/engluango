import React from 'react';
import classes from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { SearchBarProps } from './SearchBarInt';

const SearchBar = ({ placeholder, value, onChange }: SearchBarProps) => {
  return (
    <div className={classes.searchBarWrapper}>
      <FiSearch className={classes.searchBarIcon} />
      <input
        className={classes.searchBar}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBar;
