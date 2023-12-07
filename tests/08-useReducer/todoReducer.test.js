import { todoReducer } from '../../src/08-useReducer';


describe('tests in todoReducer', () => {
    const initialState = [
        { id: 1, task: 'Learn React', done: false },
        { id: 2, task: 'Learn Redux', done: false },
    ];

    test('should add a new todo', () => {
        const newTodo = { id: 3, task: 'Learn Jest', done: false };
        const action = { type: '[TODO] add todo', payload: newTodo };
        const state = todoReducer(initialState, action);

        expect(state).toEqual([...initialState, newTodo]);
        expect(state).toContain(action.payload);
    });

    test('should delete a todo', () => {
        const action = { type: '[TODO] delete todo', payload: 1 };
        const state = todoReducer(initialState, action);

        expect(state).toEqual([initialState[1]]);
    });

    test('should toggle a todo', () => {
        const action = { type: '[TODO] toggle todo', payload: 1 };
        const state = todoReducer(initialState, action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(initialState[1]);
    });
});