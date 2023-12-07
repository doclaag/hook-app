import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context';

describe('tests in <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Luis Alonzo',
    };

    test('should show the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('{\n   "user": null\n}');
    });

    test('should show the component with the user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(`"id": ${user.id}`);
        expect(preTag.innerHTML).toContain(`"name": "${user.name}"`);
    });
});