import React, { useContext } from 'react';
import { TodosContext } from '../Contexts/TodoContext';
import Todo from './Todo';

const todos = () => {

    const { todos } = useContext(TodosContext);

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default todos;