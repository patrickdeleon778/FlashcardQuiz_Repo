import React, { useEffect, useState } from "react";
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
  const [disabledButt, setDisabledButt] = useState(false);

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  useEffect(() => {
    setTimeout(() => {
      setDisabledButt(true);
    }, 3000);
  }, [])

  return (
    <>
      <GridItem
        className={`mainCard rotateIn ${!flip ? "" : "backCard"}`}
        onClick={() => disabledButt && setFlip(!flip)}
        cursor={disabledButt ? 'pointer' : 'not-allowed'}
        w="355px"
        h="250px"
      >
        {!flip ? (
          <Box className="oneCard"maxWidth='80%'>
            <Box className="frontCard p4Font">
              <Text
                p={6}
                pb={2}
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
                {choices.map((choice) => (
                  <Box key={choice} mb={"0.5"}>
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
          <Box className="p4Font correctText" pl='65px'>
            {decodeString(singleCard.correct_answer)}
          </Box>
        )}
      </GridItem>
    </>
  );
};

export default Card;
