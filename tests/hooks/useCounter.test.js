import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('tests in useCounter', () => {

    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(typeof decrement).toBe('function');
        expect(typeof increment).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should generate the counter with the value of 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter(0));
        act(() => {
            result.current.increment();
            result.current.increment(2);
        });
        expect(result.current.counter).toBe(3);
    });

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter(2));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.counter).toBe(1);
    });

    test('should not decrement counter below 0', () => {
        const { result } = renderHook(() => useCounter(0));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.counter).toBe(0);
    });

    test('should reset counter to initial value', () => {
        const { result } = renderHook(() => useCounter(100));
        act(() => {
            result.current.increment();
            result.current.increment();
            result.current.reset();
        });
        expect(result.current.counter).toBe(100);
    });
});