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
// import Bgm from "../src/components/audioComponents/Bgm"; // THIS IS FOR THE PC
import Bgm from "./components/audioComponents/BGM"; // THIS IS FOR THE MAC
import GenButton from "./components/audioComponents/GenButton";
import YourAffection from "./components/audioComponents/YourAffection";

import hoverSound from "../src/assets/audio/optionHover.mp3";

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

  console.log("data from app.tsx:", data);

  const handlePlay = () => {
    setPlay(true);
    setYourAffection(true);
  };

  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const [loadButtonClassName, setloadButtonClassName] = useState("p4Font slideUp");
  const [playButtonClassName, setPlayButtonClassName] = useState("bounceIn");

  useEffect(() => {
    const timeoutLoad = setTimeout(() => {
      setloadButtonClassName("p4Font pound");
    }, 2100);

    const timeoutPlay = setTimeout(() => {
      setPlayButtonClassName("pulse");
    }, 1400)

    return () => {
      clearTimeout(timeoutLoad);
      clearTimeout(timeoutPlay);
    };
  }, []);

  const handleOptionHover = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.play();
    }
  };

  const handleOptionLeave = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      {!play ? (
        <>
          <Box className="bounceIn" display="flex" justifyContent="center">
            <Image
              src="/src/assets/images/persona4logo.gif"
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
              onMouseLeave={handleOptionLeave}
            >
              <Image
                src="/src/assets/images/actuallydoneButton.png"
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
                      ref={catergoryRef}
                      variant="unstyled"
                      color="white"
                      width="93%"
                      ml={20}
                      mb={5}
                      fontSize={25}
                      onMouseEnter={handleOptionHover}
                      onMouseLeave={handleOptionLeave}
                      cursor="pointer"
                    >
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>
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
                        width="90%"
                        ml={20}
                        mb={5}
                        fontSize={25}
                        onMouseEnter={handleOptionHover}
                        onMouseLeave={handleOptionLeave}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          borderColor="#36311e"
                          color={"white"}
                          mb={5}
                          onMouseEnter={handleOptionHover}
                          onMouseLeave={handleOptionLeave}
                        />
                        <NumberDecrementStepper
                          borderColor="#36311e"
                          color={"white"}
                          mb={5}
                          onMouseEnter={handleOptionHover}
                          onMouseLeave={handleOptionLeave}
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Box>

                <Box
                  className={loadButtonClassName}
                  mt={8}
                  onMouseEnter={handleOptionHover}
                  onMouseLeave={handleOptionLeave}
                >
                  <FormControl>
                    <Button
                      type="submit"
                      fontSize={50}
                      variant="ghost"
                      _hover={{}}
                      _active={{}}
                    >
                      Load Game
                    </Button>
                  </FormControl>
                </Box>

                <audio ref={hoverAudioRef}>
                  <source src={hoverSound} type="audio/mp3" />
                </audio>
              </form>
            </>
          ) : (
            <Box margin={10}>
              <CardList cardList={data} />
              <Bgm />
              {genAudio && <GenButton />}
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
