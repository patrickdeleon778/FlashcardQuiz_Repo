import React from 'react'
import useCards from './hooks/useCards'
import { Box, Center, Text } from '@chakra-ui/react';
import CardList from './components/CardList';
import './App.css';

const App = () => {

  const {data} = useCards();

  return (
    <Box>
      <CardList cardList={data}/>
    </Box>
  )
}

export default App
