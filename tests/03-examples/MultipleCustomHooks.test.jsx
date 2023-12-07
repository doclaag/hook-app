import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter, useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('tests in <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeTruthy();
    });

    test('should show the loading message', () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
    });

    test('should show the quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Luis', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Luis')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeFalsy();
    });

    test('should increment the counter', async () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Luis', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });

});
