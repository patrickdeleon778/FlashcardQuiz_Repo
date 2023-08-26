import React from "react";
import useCards from "./hooks/useCards";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import CardList from "./components/CardList";
import "./App.css";
import Play from "./components/Play";
import Bgm from "./components/audioComponents/BGM";

const App = () => {
  const { data, play, setPlay } = useCards();

  const handlePlay = () => {
    setPlay(true);
}

  return (
    <>
      {!play ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={600}
        >
          <Button onClick={handlePlay}>Play</Button>
        </Box>
      ) : (
        <Box margin={10}>
          <CardList cardList={data} />
          <Bgm/>
        </Box>
      )}
    </>
  );
};

export default App;
