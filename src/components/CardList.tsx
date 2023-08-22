import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const CardList = () => {
  return (
    <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']} gap={6}>
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
    </Grid>
  )
}

export default CardList
