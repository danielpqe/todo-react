import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { useTodos } from "./useTodos";
import { Modal } from "../Modal";
import { Header } from "../Header";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <Header loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
          
          />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            completed={todo.completed}
          />
        )}
      />
      {/* {todo=>
          <TodoItem
            key={todo.text}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            completed={todo.completed}
          />
        }
       </TodoList>  */}

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
