import React from "react";
import useCards from "./hooks/useCards";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import CardList from "./components/CardList";
import "./App.css";
import Bgm from "./components/audioComponents/BGM";
import SelectAmount from "./components/SelectAmount";

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
          <SelectAmount/>
          <Button onClick={handlePlay}>Play</Button>
        </Box>
      ) : (
        <Box margin={10}>
          {/* <SelectAmount/> */}
          <CardList cardList={data} />
          {/* <Bgm/> */}
        </Box>
      )}
    </>
  );
};

export default App;
