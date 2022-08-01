import React, { useEffect, useState } from "react";
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

import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  userLoginFunc,
  userRegisterWithEmailPassword,
} from "../config/Firebase";
import LoadingScreen from "./LoadingScreen";

const LoginOrRegister = ({ loginOrRegis }) => {
  const nav = useNavigate();
  // const toast = useToast();
  // const Toast = () =>
  //   toast({
  //     title: "Error",
  //     description: error.message,
  //     status: "error",
  //     duration: 1000,
  //     isClosable: true,
  //   });

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      nav("/");
    }
    if (error !== undefined) {
      console.log(error);
    }
  }, [user, nav, error]);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const emailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const passOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    userLoginFunc(credential.email, credential.password);
  };

  const registerHandler = () => {
    userRegisterWithEmailPassword(credential.email, credential.password);
  };

  const loginOrRegisterHandler = () => {
    if (loginOrRegis === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  if (loading) {
    return <LoadingScreen />;
  } else {
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
          {loginOrRegis === "login" ? "Sign In" : "Sign Up"}
        </Heading>
        <Flex
          bgColor={"gray.200"}
          justifyContent={"center"}
          borderRadius={"10px"}
          p={"2em"}
          width={"xs"}
          shadow={"xl"}
        >
          <form>
            <FormControl my={"1em"} isRequired>
              <FormLabel fontWeight={"bold"}>Email</FormLabel>
              <Input
                type={"email"}
                placeholder={"Email"}
                backgroundColor={"whiteAlpha.900"}
                borderColor={"gray.700"}
                onChange={emailOnChangeHandler}
                value={credential.email}
              />
            </FormControl>
            <FormControl my={"1em"} isRequired>
              <FormLabel fontWeight={"bold"}>Password</FormLabel>
              <Input
                type={"password"}
                placeholder={"Password"}
                backgroundColor={"whiteAlpha.900"}
                borderColor={"gray.700"}
                onChange={passOnChangeHandler}
                value={credential.password}
              />
            </FormControl>

            <Button
              type="button"
              onClick={loginOrRegisterHandler}
              my={"1em"}
              width={"full"}
              colorScheme={"violet"}
            >
              {loginOrRegis === "login" ? "Sign In" : "Sign Up"}
            </Button>

            {loginOrRegis === "login" ? (
              <Text>
                Dont have any account?
                <Link
                  to={"/register"}
                  style={{ textDecoration: "underline" }}
                  role={"link"}
                >
                  Register
                </Link>
              </Text>
            ) : (
              <Text>
                Already have an account?
                <Link
                  to={"/login"}
                  style={{ textDecoration: "underline" }}
                  role={"link"}
                >
                  Sign In
                </Link>
              </Text>
            )}
          </form>
        </Flex>
      </Container>
    );
  }
};

export default LoginOrRegister;
