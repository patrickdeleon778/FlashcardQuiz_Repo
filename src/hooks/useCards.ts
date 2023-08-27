import React, { useEffect, useRef, useState } from "react";
import apiClient from "../services/apiClient";
import CardInfoProp from "../models/CardInfoProp";
import categoryApi from "../services/categoryApi";
import CategoryInfoProps from "../models/CategoryInfoProps";

interface Response {
  results: CardInfoProp[];
}

interface CategoryResponse {
  trivia_categories: CategoryInfoProps[];
}

const useCards = () => {
  const [data, setData] = useState<CardInfoProp[]>([]);
  const [categories, setCategories] = useState<CategoryInfoProps[]>([]);
  const [error, setError] = useState("");
  const [flip, setFlip] = useState(false);
  const [play, setPlay] = useState(false);
  const [selectCat, setSelectCat] = useState(false);

  const catergoryRef = useRef<HTMLSelectElement>(null);
  const numberOfCardsRef = useRef<HTMLInputElement>(null);
  

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const amount = numberOfCardsRef.current?.value;
    const category = catergoryRef.current?.value;

    console.log("Submitting form with amount:", amount);
    console.log("Category selected:", category);

    apiClient
      .get('', {
        params: {
          amount: amount,
          category: category,
        },
      })
      .then((response) => {
        const responseData: Response = response.data;
        // console.log(responseData);
        setData(responseData.results);
        console.log(responseData.results);
      })
      .catch((error) => {
        setError(error.message);
      });

      setSelectCat(true);
  }

  // const fetchData = () => {

  //   const amount = numberOfCardsRef.current?.value;
  //   const category = catergoryRef.current?.value;

  //   console.log("Submitting form with amount:", amount);
  //   console.log("Category selected:", category);

  //   apiClient
  //     .get('', {
  //       params: {
  //         amount: amount,
  //         category: category,
  //       },
  //     })
  //     .then((response) => {
  //       const responseData: Response = response.data;
  //       // console.log(responseData);
  //       setData(responseData.results);
  //       console.log(responseData.results);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }

  useEffect(() => {
    // apiClient.get('')
    //     .then(response => {
    //         const responseData: Response = response.data;
    //         setData(responseData.results);
    //         console.log(responseData.results);
    //     })
    //     .catch((error) => {
    //         setError(error.message);
    //     });

  }, []);

  useEffect(() => {
    categoryApi
      .get("")
      .then((response) => {
        const categoryData: CategoryResponse = response.data;
        const categoryResults: CategoryInfoProps[] =
          categoryData.trivia_categories;
        setCategories(categoryResults);
        // console.log(categoryResults);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  // console.log(categories);
  // console.log(data);

  return {
    data,
    error,
    flip,
    play,
    selectCat,
    categories,
    setFlip,
    setPlay,
    setSelectCat,
    catergoryRef,
    numberOfCardsRef,
    handleSubmit,
    // fetchData
  };
};

export default useCards;
