import React from 'react'
import useCards from './hooks/useCards'
import { Box, Text } from '@chakra-ui/react';

const App = () => {

  const {data, error} = useCards();

  return (
    <div>
      
    </div>
  )
}

export default App
