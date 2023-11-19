import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!description || description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        try {
            // console.log(newTodo);
            onNewTodo(newTodo);
            onResetForm();
        } catch (error) {
            alert('Error al agregar nuevo TODO:', error);
        }
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <input
                type='text'
                name='description'
                placeholder='¿Qué hay que hacer?'
                autoComplete='off'
                className='form-control'
                value={description}
                onChange={onInputChange}
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1 btn-block'
            >
                Agregar
            </button>
        </form>
    );
};

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};