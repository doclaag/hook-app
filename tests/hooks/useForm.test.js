import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('tests in useForm', () => {
    const initialForm = {
        name: 'Luis Alonzo',
        email: 'contaco@doclaag.com'
    }

    test('should return the default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;

        expect(formState).toEqual(initialForm);
        expect(typeof onInputChange).toBe('function');
        expect(typeof onResetForm).toBe('function');
    });

    test('should change the name of the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        const newValue = 'Juan';

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.formState.name).toBe(newValue);
    });

    test('should reset form to initial values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        const newValue = 'Juan';

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.formState).toEqual(initialForm);
    });

    test('should change the email of the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        const newValue = 'newemail@doclaag.com';

        act(() => {
            onInputChange({ target: { name: 'email', value: newValue } });
        });

        expect(result.current.formState.email).toBe(newValue);
    });
});