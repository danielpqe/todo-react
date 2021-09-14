import React from 'react';
import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <h2 className="TodoCounter">{completed} of {total} completed</h2>
  );
}

export { TodoCounter };