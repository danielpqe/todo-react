import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue, loading}) {
  

  const onSearchValueChanged = (event) => {
   
    setSearchValue(event.target.value);
  };
  return (
    <input
      className = 'TodoSearch'
      placeholder="Search something to do"
      onChange={onSearchValueChanged}
      value={searchValue}
      disabled={!!loading}
    />
  );
}

export { TodoSearch };


