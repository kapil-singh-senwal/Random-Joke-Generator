import { useState } from 'react';

export const useJoke = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            if (!response.ok) throw new Error('Failed to fetch');

            const data = await response.json();
            setJoke(data);
            return data;
        } catch (error) {
            console.error(error);
            setJoke({ error: true });
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { joke, loading, fetchJoke };
};
