import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import useCards from '../hooks/useCards'

const Play = () => {

    const {play, setPlay} = useCards();

    const handlePlay = () => {
        setPlay(true);
    }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' mt={600}>
      <Button onClick={handlePlay}>Play</Button>
    </Box>
  )
}

export default Play
