import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal';

function AppUI() {

  // console.log("antes")
  //   React.useEffect (() =>{
  //       console.log("Use effect")
  //   })
  // console.log("despues")

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal, } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter
      // completed={completedTodos}
      // total={totalTodos}
      />
      <TodoSearch
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      />

      {/* <TodoContext.Consumer>
        {({ 
          error, 
          loading, 
          searchedTodos, 
          completeTodo, 
          deleteTodo })=>( */}
      <TodoList>
        {error && <p>Error!</p>}
        {loading && <p>Cargando!</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}


      {/* </TodoContext.Consumer> */}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default AppUI;