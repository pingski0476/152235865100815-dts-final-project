import React from "react";
import { Container, Highlight, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxW={"100%"} as={"footer"} centerContent>
      <Divider orientation="horizontal" />
      <Highlight
        query={"Afrillian Ramadhan"}
        styles={{
          fontWeight: "bold",
          fontFamily: "Poppins",
        }}
      >
        Proudly made by ©Afrillian Ramadhan
      </Highlight>
    </Container>
  );
};

export default Footer;
