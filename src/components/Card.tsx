import React from "react";
import useCards from "../hooks/useCards";
import { Box, GridItem, Text } from "@chakra-ui/react";
import CardInfoProp from "../models/CardInfoProp";

interface CardProp {
  singleCard: CardInfoProp;
}

const Card = ({ singleCard }: CardProp) => {
  const { flip, setFlip } = useCards();
  const answer = singleCard.correct_answer;
  const choices = [...singleCard.incorrect_answers, answer];

  return (
    <>
      <GridItem onClick={() => setFlip(!flip)} w="100%" h="200">
        {/* {flip ? singleCard.question : singleCard.correct_answer} */}
        <Box className="frontCard">
          <Text>{singleCard.question}</Text>
          <Box>
            {choices.map((choice, index) => (
              <Box key={index} mb={2}>
                {choice}
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="backCard">{singleCard.correct_answer}</Box>
      </GridItem>
    </>
  );
};

export default Card;
