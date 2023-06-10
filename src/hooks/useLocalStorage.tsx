import { useState } from 'react';

type SetValueFunction<T> = (value: T | ((prevValue: T) => T)) => void;

type UseLocalStorageResult<T> = [T, SetValueFunction<T>];

export default function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageResult<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: SetValueFunction<T> = (value) => {
    try {
      const valueToStore = typeof value === 'function' ? (value as Function)(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}