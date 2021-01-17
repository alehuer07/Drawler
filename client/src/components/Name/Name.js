import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const axios = require("axios");

const Name = (props) => {
  const [state, setState] = useState("");

  let handleSubmit = () => {
    console.log("click");
    axios
      .get("http://localhost:5000/session/create-session")
      .then((res) => {
        //handle success
      })
      .catch((error) => {
        //handle error
        console.log(error);
      });
  };

  useEffect(() => {
    //send HTTP request
    //save response t ovariable
  });

  return (
    <Flex h="500px" justifyContent="center" alignItems="center">
      <Flex
        w="400px"
        h="350px"
        p="4"
        border="1px"
        boxShadow="lg"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl id="first-name" isRequired>
          <FormLabel>Your nickname</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <Button mt="5" onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Name;
