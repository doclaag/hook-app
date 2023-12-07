import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext';

describe('tests in <MainApp />', () => {

    test('should show the HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Home')).toBeTruthy();
        // screen.debug();
    });

    test('should show the LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Login')).toBeTruthy();
        // screen.debug();
    });

    test('should show the AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('About')).toBeTruthy();
        // screen.debug();
    });
});