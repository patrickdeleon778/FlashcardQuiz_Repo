import React, { useEffect, useState } from 'react'
import apiClient from "../services/apiClient"


const useCards = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        apiClient.get('')
            .then(response => {
                setData(response.data.results);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    console.log(data);

  return { data, error };
}

export default useCards
