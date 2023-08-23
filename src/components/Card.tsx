import React from 'react'
import useCards from '../hooks/useCards';
import { GridItem } from '@chakra-ui/react';
import CardProps from '../models/CardProps';

const Card = () => {

  const {data} = useCards();

  return (
    <>
      {data.map((card) => <GridItem>{card.question}</GridItem>)}
    </>
  )
}

export default Card
