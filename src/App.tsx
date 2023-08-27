import React, { useEffect } from "react";
import useCards from "./hooks/useCards";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from "@chakra-ui/react";
import CardList from "./components/CardList";
import "./App.css";
// import Bgm from "./components/audioComponents/BGM";
import SelectAmount from "./components/SelectAmount";

const App = () => {
  const {
    data,
    play,
    setPlay,
    categories,
    catergoryRef,
    numberOfCardsRef,
    handleSubmit,
  } = useCards();

  console.log("data from app.tsx:", data);

  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <>
      {!play ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={600}
        >
          {/* <SelectAmount/> */}
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="category">Catergory</FormLabel>
              <Select id="category" ref={catergoryRef}>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Cards. Pick em</FormLabel>
              <NumberInput min={1} max={25}>
                <NumberInputField ref={numberOfCardsRef} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <Button type="submit">Create em Cards</Button>
            </FormControl>
          </form>
          <Button onClick={handlePlay}>Play</Button>
        </Box>
      ) : (
        <Box margin={10}>
          {/* <SelectAmount/> */}

          {/* <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="category">Catergory</FormLabel>
              <Select id="category" ref={catergoryRef}>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Cards. Pick em</FormLabel>
              <NumberInput min={1} max={25}>
                <NumberInputField ref={numberOfCardsRef} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <Button type="submit">Create em Cards</Button>
            </FormControl>
          </form> */}
          <CardList cardList={data} />
          {/* <Bgm/> */}
        </Box>
      )}
    </>
  );
};

export default App;
