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
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, userRegisterWithEmailPassword } from "../config/Firebase";
import LoadingScreen from "./LoadingScreen";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginOrRegister = ({ loginOrRegis }) => {
  const nav = useNavigate();

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      nav("/");
    }
  }, [user, nav]);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

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

  const loginHandler = async (email, password) => {
    try {
      const loginResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User yang sekarang login adalah :", loginResponse.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const registerHandler = () => {
    userRegisterWithEmailPassword(credential.email, credential.password);
  };

  const loginOrRegisterHandler = (e) => {
    if (loginOrRegis === "login") {
      e.preventDefault();
      loginHandler(credential.email, credential.password);
    } else {
      e.preventDefault();
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
          flexDirection={"column"}
        >
          {errorMessage !== "" ? (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          ) : (
            <></>
          )}

          <form onSubmit={loginOrRegisterHandler}>
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
              type="submit"
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
