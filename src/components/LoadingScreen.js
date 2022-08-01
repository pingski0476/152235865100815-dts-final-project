import React from "react";
import { Container, Flex, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Container
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="violet.700"
          size="xl"
        />
      </Flex>
    </Container>
  );
};

export default LoadingScreen;
