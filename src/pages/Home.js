import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
