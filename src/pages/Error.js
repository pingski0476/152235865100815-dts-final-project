import React from "react";
import { Flex, Container, Text, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const Error = () => {
  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Flex
        bgColor={"gray.200"}
        justifyContent={"center"}
        borderRadius={"10px"}
        p={"2em"}
        flexDirection={"column"}
      >
        <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"}>
          Error 404 | Page Not Found
        </Text>
        <Text textAlign={"center"} mt={"0.5em"} fontSize={"xl"}>
          Back to{" "}
          <ReactLink to={"/"}>
            <Link>Home</Link>
          </ReactLink>
        </Text>
      </Flex>
    </Container>
  );
};

export default Error;
