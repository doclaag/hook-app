import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>
                {todo.description}
            </span>
            <button
                className='btn btn-danger'
                onClick={() => onDeleteTodo && onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
};