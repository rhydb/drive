import { useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }

            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        } catch {
            return defaultValue
        }
    })

    const setValue = (newValue) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch {}
        setStoredValue(newValue);
    }

    return [storedValue, setValue];
}