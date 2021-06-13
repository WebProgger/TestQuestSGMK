import {useState, useCallback} from 'react';

const proxy = "https://swapi.dev";

export const useHttp = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const request = useCallback(async (url, method= 'GET', body = null, headers = {}) => {
        setLoading(true);
        try{

            if(body) {
                body = JSON.stringify(body);
            }

            const response = await fetch(proxy+url, {method, body, headers});
            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || 'Error');
            }

            setLoading(false);

            return data;

        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError };
}