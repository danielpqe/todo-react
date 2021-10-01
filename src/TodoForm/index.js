import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm(props) {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const { 
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write a new task</label>
            <textarea
                value = {newTodoValue}
                onChange={onChange}
                type="button"
                placeholder='Write a task'
            />
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    className= "TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    Type="submit"
                    className= "TodoForm-button TodoForm-button--add"

                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }