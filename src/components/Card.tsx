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

  function decodeString(str:string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str
    return textArea.value;
  }

  return (
    <>
      <GridItem className={!flip ? '' : 'backCard'} onClick={() => setFlip(!flip)} w="100%" h="200">
        {!flip ? (
          <>
            <Box className="frontCard">
              <Text fontSize={{ base: "sm", md: "md" }}>{decodeString(singleCard.question)}</Text>
              <Box>
                {choices.map((choice, index) => (
                  <Box key={index} mb={2}>
                    {decodeString(choice)}
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Box>{decodeString(singleCard.correct_answer)}</Box>
        )}

        {/* <Box className="backCard">{singleCard.correct_answer}</Box> */}
      </GridItem>
    </>
  );
};

export default Card;
