export default (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case 'EDIT_TODO': 
            let updatedTodo = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo = { 
                        ...todo,
                        name: action.payload.name
                    }
                }
                return todo;
            })

            return {
                ...state,
                todos: updatedTodo
            }
        case 'DELETE_TODO': 
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        default:
            return state;
    }
}