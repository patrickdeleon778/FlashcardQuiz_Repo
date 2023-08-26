import React from "react";
import useCards from "./hooks/useCards";
import { Box, Center, Text } from "@chakra-ui/react";
import CardList from "./components/CardList";
import "./App.css";
import BGM from "./components/audioComponents/BGM";
import Play from "./components/Play";

const App = () => {
  const { data, play } = useCards();

  return (
    <>
      {play ? (
          <Play/>
      ) : (
        <Box margin={10}>
          <CardList cardList={data} />
          <BGM />
        </Box>
      )}
    </>
  );
};

export default App;
