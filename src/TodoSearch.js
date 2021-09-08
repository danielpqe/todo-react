import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChanged = (event) => {
    setSearchValue(event.target.value)
  }
  return [
    <input 
      className="TodoSearch" 
      placeholder="Search something to do" 
      onChange={onSearchValueChanged}
      value={searchValue}
      />,
      <p>{searchValue}</p>
  ];
}

export { TodoSearch };