import React from "react";
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext'

function TodoSearch() {
  
const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChanged = (event) => {
   
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Search something to do"
      onChange={onSearchValueChanged}
      value={searchValue}
    />
  );
}

export { TodoSearch };
