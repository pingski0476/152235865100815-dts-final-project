import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Font from "./Font";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import HasLogin from "./components/HasLogin";

const theme = extendTheme({
  colors: {
    violet: {
      500: "#00297f",
      600: "#00186c",
      700: "#0d125e",
      800: "#00004f",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Routes>
        <Route
          path="/"
          element={
            <HasLogin>
              <Home />
            </HasLogin>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
