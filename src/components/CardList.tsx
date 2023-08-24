import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import useCards from "../hooks/useCards";
import CardInfoProp from "../models/CardInfoProp";

interface CardListProps {
  cardList: CardInfoProp[]
}

const CardList = ( {cardList}: CardListProps ) => {
  const { data } = useCards();

  return (
    <Grid
      templateColumns={[
        "1fr",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={6}
    >
      {/* <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' />
        <GridItem w='100%' h='200' bg='blue.500' /> */}
      {/* <Card /> */}
      {cardList.map((card) => {
        return <Card singleCard={card} key={card.id}/>;
      })}
    </Grid>
  );
};

export default CardList;
