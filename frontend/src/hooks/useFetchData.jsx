import { useEffect, useState } from "react";
import { token } from "../config.js";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);  // Reset error state before a new fetch

            try {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Fixed spacing
                    },
                });

                if (!res.ok) {
                    const result = await res.json();
                    throw new Error(result.message || 'Something went wrong 🤢');
                }

                const result = await res.json();
                setData(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);  // Set loading to false after the request ends
            }
        };

        fetchData();

        // Cleanup function in case of URL change or component unmount
        return () => {
            setData([]);  // Optional: Clear data when the component unmounts
            setError(null);  // Optional: Clear error when the component unmounts
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
