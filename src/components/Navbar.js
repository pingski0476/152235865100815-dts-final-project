import React from "react";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { auth, userLogoutFunc } from "../config/Firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const nav = useNavigate();
  const [user] = useAuthState(auth);
  const userLogoutHandler = async () => {
    await userLogoutFunc();
    nav("/login");
  };
  const navToSignIn = () => {
    nav("/login");
  };
  return (
    <Flex
      maxW={"100%"}
      shadow={"md"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box maxW={"25%"}>
        <RouteLink to={"/"}>
          <Heading px={3} fontSize={"2xl"}>
            Pokedex
          </Heading>
        </RouteLink>
      </Box>

      <Box display={"flex"} gap={2}>
        {user ? (
          <Button colorScheme={"violet"} onClick={userLogoutHandler}>
            Sign Out
          </Button>
        ) : (
          <Button colorScheme={"violet"} onClick={navToSignIn}>
            Sign In
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
