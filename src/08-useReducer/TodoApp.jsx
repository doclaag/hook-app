import { useEffect, useReducer } from 'react';
import { todoReducer, TodoList, TodoAdd } from './';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Aprender React',
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleSubmit = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] delete todo',
            payload: id,
        };

        dispatch(action);
    }


    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleSubmit} />
                </div>
            </div>
        </>
    );
};
