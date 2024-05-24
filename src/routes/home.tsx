import { useLoaderData } from "react-router-dom";
import { fetchProductCategories, fetchProducts } from "../api/Products";
import { Product } from "../models/Product";
import {
  VStack,
  Text,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductItem from "../Components/ProductItem";
import CategoryTile from "../Components/CategoryTile";
import { getCardBgColor } from "../utils/utils";

interface HomeData {
  flashSaleItems: Product[];
  categories: string[];
}

export const homeLoader = async (): Promise<HomeData> => {
  // TODO: flash sale items should be sorted on the quantity property. need to check this (less quantity come first)
  const flashSaleItems = await fetchProducts("asc", 4);
  const categories = await fetchProductCategories();
  return { flashSaleItems, categories };
};

const Home = () => {
  const { flashSaleItems, categories } = useLoaderData() as HomeData;

  return (
    <VStack width={"100%"} alignItems={"left"} pb={"60px"}>
      <Text
        my={5}
        textTransform={"capitalize"}
        fontSize={"large"}
        fontWeight={700}
      >
        Flash Sale Items
      </Text>
      <HStack>
        {flashSaleItems.map((fsi, i) => (
          <ProductItem key={fsi.id} bgColor={getCardBgColor(i)} {...fsi} />
        ))}
        {flashSaleItems.length === 0 && (
          <Text>No flash sale items to show</Text>
        )}
      </HStack>
      <Text
        my={5}
        textTransform={"capitalize"}
        fontSize={"large"}
        fontWeight={700}
      >
        Categories
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        {categories.map((ci, i) => (
          <CategoryTile key={ci} bgColor={getCardBgColor(i)} name={ci} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
export default Home;
