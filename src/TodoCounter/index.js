import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos, loading}) {

  return (
    <h2 
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        {completedTodos} of {totalTodos} completed
    </h2>
  );
}

export { TodoCounter };