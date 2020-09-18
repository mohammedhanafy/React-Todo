import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TodosContext } from '../Contexts/TodoContext';

const editTodo = (props) => {
    const { id } = useParams();

    const { todos, editTodo } = useContext(TodosContext);

    const selectedTodo = todos.find(todo => todo.id == id);

    const [todo, setTodo] = useState(selectedTodo.name);

    const updateTodo = (event) => {
        event.preventDefault();

        const todoPayload = {
            id: selectedTodo.id,
            name: todo
        }

        editTodo(todoPayload);

        props.history.replace('/');
    }

    return (
        <div>
            <form onSubmit={updateTodo}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value) } />
                <input type="submit" value="Edit Todo" />
            </form>
        </div>
    )
}

export default editTodo;