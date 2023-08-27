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
  Image,
} from "@chakra-ui/react";
import CardList from "./components/CardList";
import "./App.css";
import Bgm from "./components/audioComponents/BGM";
import SelectAmount from "./components/SelectAmount";

const App = () => {
  const {
    data,
    play,
    selectCat,
    setPlay,
    setSelectCat,
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
        <>
          <Box m="" display="flex" justifyContent="center">
            <Image
              src="/src/assets/images/persona4logo.gif"
              m={0}
              maxWidth={{ base: "100%", sm: "75%", md: "50%" }}
              objectFit="cover"
            />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={0}
          >
            <Button className='playBtn' onClick={handlePlay} variant='ghost' height='100px'>
              <Image src="/src/assets/images/actuallydoneButton.png" style={{ width: "100%", height: "100%" }}/>
            </Button>
          </Box>
        </>
      ) : (
        <>
          {!selectCat ? (
            <>
              <form onSubmit={handleSubmit} className="formBox">
                <Box className="formBackground p4Font slideRight" mb={20}>
                  <FormControl flex={1} position='relative'>
                    <FormLabel htmlFor="category" style={{ position: "absolute", top: "-70px", left: "5px" , color: '#36311e', fontSize: '25px'}}>Catergory</FormLabel>
                    <Select id="category" ref={catergoryRef} variant='unstyled' color={"white"} width="93%" ml={20} mb={5} fontSize={25}>
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                
                <Box className="formBackground p4Font slideLeft">
                <FormControl flex={1} position='relative'>
                  <FormLabel style={{ position: "absolute", top: "-70px", left: "5px" , color: '#36311e', fontSize: '25px'}}>Cards. Pick em</FormLabel>
                  <NumberInput defaultValue={15} min={1} max={25}>
                    <NumberInputField ref={numberOfCardsRef} color={"white"} borderColor="#36311e" width="90%" ml={20} mb={5} fontSize={25}/>
                    <NumberInputStepper>
                      <NumberIncrementStepper borderColor="#36311e" color={"white"}/>
                      <NumberDecrementStepper borderColor="#36311e" color={"white"}/>
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                </Box>

                <FormControl>
                  <Button type="submit">Create em Cards</Button>
                </FormControl>
              </form>
            </>
          ) : (
            <Box margin={10}>
              <CardList cardList={data} />
              <Bgm />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default App;

// <Box margin={10}>
//   <CardList cardList={data} />
//   <Bgm/>
// </Box>
