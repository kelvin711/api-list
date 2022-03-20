import axios from "axios";
import { useState } from "react"

const UseAxios = (query) => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (params) => {
        try {
            setLoading(true)
            const resonse = await axios.get(`https://api.publicapis.org/${query}`, params)
            setResponse(resonse.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    return {
        fetchData: (params) => fetchData(params), 
        response, 
        loading,
        error
    }
};


export default UseAxios;