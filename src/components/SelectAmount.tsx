import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
// import React, { useRef } from "react";
import useCards from "../hooks/useCards";
import { useEffect } from "react";

const SelectAmount = () => {
  const { categories, catergoryRef, numberOfCardsRef, handleSubmit, data,  } = useCards();

  console.log("data from selectAmount component:", data);

  useEffect(() => {
    handleSubmit
  }, [handleSubmit]);

  return (
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
          <NumberInputField ref={numberOfCardsRef}/>
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
  );
};

export default SelectAmount;
