import React, { useEffect, useState } from "react";
import { Button, Container, Box } from "@chakra-ui/react";
import axios from "axios";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const PokeEvo = () => {
  const [evo, setEvo] = useState([]);
  let params = useParams();
  return (
    <Container
      display={"flex"}
      mx={"0"}
      alignItems={"center"}
      h={"auto"}
      w={"100%"}
      maxW={"100vw"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
    ></Container>
  );
};
export default PokeEvo;
