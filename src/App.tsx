import { Box, Progress, VStack } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();

  return (
    <VStack h={"100vh"} w={"100%"} alignItems={"center"} pb={"80px"}>
      {navigation.state === "loading" ? (
        <Progress size="xs" isIndeterminate w={"100%"} />
      ) : (
        <Box h={"4px"} w={"100%"} bg={"transparent"} />
      )}
      <NavBar />
      <VStack w={"80%"}>
        <Outlet />
      </VStack>
    </VStack>
  );
}

export default App;
