import "./App.css";
import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <VStack>
      <NavBar></NavBar>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Outlet />
    </VStack>
  );
}

export default App;
