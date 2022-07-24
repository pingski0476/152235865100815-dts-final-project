import React from "react";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      maxW={"100%"}
      shadow={"md"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box maxW={"25%"}>
        <Heading px={3} fontSize={"2xl"}>
          Pingski
        </Heading>
      </Box>
      <Box display={"flex"} gap={5} fontSize={"lg"} px={4}>
        <RouteLink to={"/"}>
          <Link>Home</Link>
        </RouteLink>
        <Link>Details</Link>
      </Box>
      <Box display={"flex"} gap={2}>
        <RouteLink to={"/login"}>
          <Button variant={"outline"} colorScheme={"gray"}>
            Login
          </Button>
        </RouteLink>
        <RouteLink to={"/register"}>
          <Button colorScheme={"gray"}>SignUp</Button>
        </RouteLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
