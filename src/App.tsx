import "./App.css";
import { VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { fetchProducts } from "./api/Products";

export async function loader() {
  const flashSaleItems = await fetchProducts("asc", 4);
  return { flashSaleItems };
}

function App() {
  return (
    <VStack>
      <NavBar />
      <Outlet />
    </VStack>
  );
}

export default App;
