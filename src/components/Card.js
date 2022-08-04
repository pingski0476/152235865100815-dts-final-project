import React from "react";
import { Box, Badge, Image, Text } from "@chakra-ui/react";

const Card = ({ id, name, image, type1 }) => {
  return (
    <Box
      display={"flex"}
      maxW={"sm"}
      borderRadius={"lg"}
      my={"1em"}
      justifyContent={"center"}
      boxShadow={"lg"}
      flexWrap={"wrap"}
      flexDirection={"column"}
    >
      <Text textAlign={"center"} mt={"0.5em"}>
        #{id}
      </Text>
      <Box boxSize={"sm"} p={"0.5em"}>
        <Image src={image} boxSize={"xs"} />
      </Box>

      <Text
        textAlign={"center"}
        color="violet.800"
        fontWeight="bold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        {name}
      </Text>

      <Box display={"flex"} alignContent={"space-evenly"} p={"0.5em"}>
        <Badge textAlign={"center"}>{type1}</Badge>
      </Box>
    </Box>
  );
};

export default Card;
