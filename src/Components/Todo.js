import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodosContext } from '../Contexts/TodoContext';

const todo = ({ todo }) => {
    const { deleteTodo } = useContext(TodosContext);

    return (
        <div>
            <li>{todo.name}
                <Link to={`edit/${todo.id}`}>Edit</Link>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            
        </div>
    )
}

export default todo;