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

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <GridItem
        className={`mainCard ${!flip ? "" : "backCard"}`}
        onClick={() => setFlip(!flip)}
        w="355px"
        h="250px"
      >
        {!flip ? (
          <Box maxWidth='80%'>
            <Box className="frontCard p4Font">
              <Text
                p={4}
                noOfLines={5}
                overflow="hidden"
                overflowY="auto"
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {decodeString(singleCard.question)}
              </Text>
              <Box pl={7}>
                {choices.map((choice, index) => (
                  <Box key={index} mb={"0.5"}>
                    <Text
                      noOfLines={2}
                      overflow="hidden"
                    >
                      {decodeString(choice)}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className="p4Font" pr='60px'>
            {decodeString(singleCard.correct_answer)}
          </Box>
        )}
      </GridItem>
    </>
  );
};

export default Card;
