import React, { useEffect, useState } from 'react'
import apiClient from "../services/apiClient"
import CardInfoProp from '../models/CardInfoProp';

interface Response {
    results: CardInfoProp[]; 
  }

const useCards = () => {
    const [data, setData] = useState<CardInfoProp[]>([]);
    const [error, setError] = useState('');
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        apiClient.get('')
            .then(response => {
                const responseData: Response = response.data;
                setData(responseData.results);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    console.log(data);

  return { data, error, flip, setFlip};
}

export default useCards
