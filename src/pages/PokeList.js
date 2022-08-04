import React, { useEffect, useState } from "react";
import { Button, Container, Box } from "@chakra-ui/react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [more, setMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const getAllPokemon = async () => {
    try {
      const pokeResponse = await axios.get(more);
      setMore(pokeResponse.data.next);
      const getAllDetails = (result) => {
        try {
          result.forEach(async (pokemon) => {
            const allResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            setPokeList((currentList) => [...currentList, allResponse.data]);
          });
        } catch (error) {
          console.log(error);
        }
      };
      getAllDetails(pokeResponse.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPokemon();
  }, []);

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
    >
      <Box
        display={"flex"}
        alignContent={"space-between"}
        maxW={"100vw"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        {pokeList.map((pokemon) => (
          <Link to={`/${pokemon.id}`}>
            <Card
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              id={pokemon.id}
              key={pokemon.id}
              type1={pokemon.types[0].type.name}
            />
          </Link>
        ))}
      </Box>

      <Button colorScheme={"violet"} onClick={() => getAllPokemon()} m={"1em"}>
        Load More
      </Button>
    </Container>
  );
};

export default PokeList;
