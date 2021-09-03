import React from "react";
import TodoCounter from './TodoCounter.js'
import TodoSearch from "./TodoSearch.js";
import TodoList from "./TodoList.js";
import TodoItem from "./TodoItem.js";
import CreateTodoButton from "./CreateTodoButton.js";


const todos = [
  { text: 'Diseniar', completed: false},
  { text: 'Implementar', completed: false},
  { text: 'Testear', completed: false}
]
function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem text={todo.text} />
        ))}
       
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
