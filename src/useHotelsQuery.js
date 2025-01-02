import React from 'react';
import { fetchHotels } from './api';

const useHotelsQuery = function () {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const loadHotels = async () => {
        setLoading(true);
        setError(null);
        try {
            const hotels = await fetchHotels();
            setData(hotels);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        loadHotels();
    }, []);


    return { data, loading, error, refetch: loadHotels};
}

export { useHotelsQuery }