import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodos } from '../../src/hooks/useTodos';


jest.mock('../../src/hooks/useTodos');

describe('tests in <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Learn React',
                done: true,
            },
            {
                id: 2,
                description: 'Learn Mongo',
                done: false,
            },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
    });

    test('should display the component correctly', () => {

        render(<TodoApp />);
        // screen.debug();

        expect(screen.getByText('Learn React')).toBeTruthy();
        expect(screen.getByText('Learn Mongo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});