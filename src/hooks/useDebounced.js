import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [debounedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounedValue;
}

useDebounced.propTypes = {
    value: PropTypes.any.isRequired,
    delay: PropTypes.number.isRequired,
};

export default useDebounced;
