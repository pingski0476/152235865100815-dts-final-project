import React from "react";
import {
  Flex,
  Container,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      flexDirection={"column"}
    >
      <Heading
        fontFamily={"Poppins"}
        fontWeight="Bold"
        fontSize={"2xl"}
        mb={"0.5em"}
      >
        Login
      </Heading>
      <Flex
        bgColor={"gray.200"}
        justifyContent={"center"}
        borderRadius={"10px"}
        p={"2em"}
        width={"xs"}
      >
        <form>
          <FormControl my={"1em"}>
            <FormLabel fontWeight={"bold"}>Email</FormLabel>
            <Input
              type={"email"}
              placeholder={"Email"}
              backgroundColor={"whiteAlpha.900"}
              borderColor={"gray.700"}
            />
          </FormControl>
          <FormControl my={"1em"}>
            <FormLabel fontWeight={"bold"}>Password</FormLabel>
            <Input
              type={"password"}
              placeholder={"Password"}
              backgroundColor={"whiteAlpha.900"}
              borderColor={"gray.700"}
            />
          </FormControl>
          <Button my={"1em"} width={"full"} colorScheme={"green"}>
            Sign In
          </Button>
          <Text>
            Dont have any account? <Link to={"/register"}>Register</Link>
          </Text>
        </form>
      </Flex>
    </Container>
  );
};

export default Login;
