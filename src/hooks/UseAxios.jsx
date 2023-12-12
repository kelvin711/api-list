import axios from "axios";
import { useState } from "react";

const useAxios = (query) => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (params) => {
        setLoading(true);
        setError(null); // Reset the error state before making a new request
        try {
            const response = await axios.get(`https://proxy-api-s947.onrender.com/api/${query}`, { params });
            setResponse(response.data);
        } catch (error) {
            setError(error);
            setResponse({}); // Clear the previous response on error
        } finally {
            setLoading(false);
        }
    };

    return {
        fetchData,
        response,
        loading,
        error
    };
};

export default useAxios;