import React, { useEffect, useRef, useState } from "react";
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
import Bgm from "../src/components/audioComponents/BGM"; // THIS IS FOR THE PC
// import Bgm from "./components/audioComponents/BGM"; // THIS IS FOR THE MAC

import useAudio from "./hooks/useAudio";
import YourAffection from "./components/audioComponents/YourAffection";
// import Bgm from "./components/audioComponents/BGM";
import P4Logo from "../src/assets/images/Persona_4_Golden_logo.webp";
import PlayButton from "../src/assets/images/actuallydoneButton.png";

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
    genAudio,
    yourAffection,
    setYourAffection,
  } = useCards();

  const { handleOptionHover, handleOptionLeave, handlePlayGen} = useAudio();

  console.log("data from app.tsx:", data);

  const handlePlay = () => {
    setPlay(true);
    setYourAffection(true);
  };

  const [loadButtonClassName, setloadButtonClassName] =
    useState("p4Font slideUp");
  const [playButtonClassName, setPlayButtonClassName] = useState("bounceIn");

  useEffect(() => {
    const timeoutLoad = setTimeout(() => {
      setloadButtonClassName("p4Font pound");
    }, 2100);

    const timeoutPlay = setTimeout(() => {
      setPlayButtonClassName("pulse");
    }, 1400);

    document.addEventListener('keydown', keyPressed, true)

    return () => {
      clearTimeout(timeoutLoad);
      clearTimeout(timeoutPlay);
    };
  }, []);
  
  const keyPressed = (e:Event) => {
    e && setPlay(true);
    setYourAffection(true);
    handlePlayGen()
  }


  return (
    <>
      {!play ? (
        <>
          <Box className="bounceIn" display="flex" justifyContent="center">
            <Image
              src={P4Logo}
              mt={1}
              maxWidth={{ base: "100%", sm: "75%", md: "50%" }}
              objectFit="cover"
            />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={-6}
          >
            <Button
              className="playBtn"
              onClick={handlePlay}
              variant="ghost"
              height="100px"
              _hover={{}}
              _active={{}}
              onMouseEnter={handleOptionHover}
            >
              <Image
                src={PlayButton}
                className={playButtonClassName}
                _hover={{ transform: "translateY(-2px)" }}
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </Box>
        </>
      ) : (
        <>
          {!selectCat ? (
            <>
              {yourAffection && <YourAffection />}
              <form onSubmit={handleSubmit} className="formBox">
                <Box className="formBackground p4Font slideRight" mb={20}>
                  <FormControl flex={1} position="relative">
                    <FormLabel
                      htmlFor="category"
                      style={{
                        position: "absolute",
                        top: "-70px",
                        left: "5px",
                        color: "#36311e",
                        fontSize: "25px",
                      }}
                    >
                      Catergory
                    </FormLabel>
                    <Select
                      id="category"
                      className="formSelect"
                      ref={catergoryRef}
                      variant="unstyled"
                      color="white"
                      width={{ base: '78%', sm: '85%', md: '90%', lg: '93%', xl: '93%' }}
                      ml={20}
                      mb={5}
                      fontSize={25}
                      onMouseEnter={handleOptionHover}
                      onClick={handlePlayGen}
                      
                    >
                      {categories.map((category) => (
                        <option
                          value={category.id}
                          key={category.id}
                          style={{
                            backgroundColor: "#36311e",
                          }}
                          onMouseEnter={handleOptionHover}
                        >
                          {category.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box className="formBackground p4Font slideLeft" mb={20}>
                  <FormControl flex={1} position="relative">
                    <FormLabel
                      style={{
                        position: "absolute",
                        top: "-70px",
                        left: "5px",
                        color: "#36311e",
                        fontSize: "25px",
                      }}
                    >
                      Cards
                    </FormLabel>
                    <NumberInput defaultValue={15} min={1} max={25}>
                      <NumberInputField
                        ref={numberOfCardsRef}
                        color={"white"}
                        borderColor="#36311e"
                        width="87%"
                        ml={20}
                        mb={5}
                        fontSize={25}
                        p={0}
                        onMouseEnter={handleOptionHover}
                        onClick={handlePlayGen}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          borderColor="#36311e"
                          color={"white"}
                          mb={5}
                          onMouseEnter={handleOptionHover}
                          onClick={handlePlayGen}
                        />
                        <NumberDecrementStepper
                          borderColor="#36311e"
                          color={"white"}
                          mb={5}
                          onMouseEnter={handleOptionHover}
                          onClick={handlePlayGen}
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Box>

                <Box
                  className={loadButtonClassName}
                  mt={8}
                  onMouseEnter={handleOptionHover}
                >
                  <FormControl>
                    <Button
                      className="fontButton"
                      type="submit"
                      fontSize={{ base: 25, sm: 25, md: 30, lg: 40, xl: 50 }}
                      variant="ghost"
                      _hover={{}}
                      _active={{}}
                    >
                      Load Game
                    </Button>
                  </FormControl>
                </Box>
              </form>
            </>
          ) : (
            <Box margin={10}>
              <CardList cardList={data} />
              <Bgm />
              {/* {genAudio && <GenButton />} */}
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default App;

