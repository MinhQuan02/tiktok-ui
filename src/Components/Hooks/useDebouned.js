import { useState, useEffect } from 'react';
function useDebouned(value, delay) {
    const [debounedValue, setDebounedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounedValue(value), delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounedValue;
}

export default useDebouned;
