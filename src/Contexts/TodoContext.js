import React, { createContext, useReducer } from 'react';
import TodoReducer from '../Reducers/TodoReducer';

export const TodosContext = createContext();

const initialState = {
    todos: []
}

const TodosContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const addTodo = (todo) => {
        dispatch({type: 'ADD_TODO', payload: todo});
    }

    const editTodo = (todo) => {
        dispatch({type: 'EDIT_TODO', payload: todo});
    }

    const deleteTodo = (todoId) => {
        dispatch({type: 'DELETE_TODO', payload: todoId});
    }

    const contextValues = {
        ...state,
        addTodo,
        editTodo,
        deleteTodo
    }

    return (
        <TodosContext.Provider value={contextValues}>
            {children}
        </TodosContext.Provider>
    )

}

export default TodosContextProvider;