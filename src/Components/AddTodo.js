import React, { useContext, useState } from 'react';
import { TodosContext } from '../Contexts/TodoContext';

const addTodo = (props) => {

    const { addTodo } = useContext(TodosContext);

    const [todo, setTodo] = useState('');

    const submitTodo = (event) => {
        event.preventDefault();
        
        const todoPayload = {
            id: Math.floor(Math.random() * 10000000),
            name: todo
        }

        addTodo(todoPayload);

        props.history.replace('/');
    }

    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value) } />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default addTodo;