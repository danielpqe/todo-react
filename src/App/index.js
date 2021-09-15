import React from "react";
import AppUI from "./AppUI";

// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];
function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItems = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItems);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    //}
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    //}
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
