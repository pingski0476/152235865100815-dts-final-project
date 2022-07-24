import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Font from "./Font";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <ChakraProvider>
      <Font />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
