import { useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../api/Products";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProductItem from "../Components/ProductItem";
import { getCardBgColor } from "../utils/utils";

const Category = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        try {
          setIsLoading(true);
          // TODO: limit is always set to 4
          const responseData = await fetchCategoryProducts(categoryId);
          setProducts(responseData);
          setError(null);
        } catch (error) {
          setError(error as Error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <VStack w={"100%"}>
      <Text
        mr={"auto"}
        fontSize={"large"}
        fontWeight={700}
        textTransform={"capitalize"}
        my={4}
      >
        {categoryId}
      </Text>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          {products.length > 0 ? (
            <HStack>
              {products.map((pi, i) => (
                <ProductItem key={pi.id} bgColor={getCardBgColor(i)} {...pi} />
              ))}
            </HStack>
          ) : error?.message ? (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>
                Sorry something went wrong. please try again later!
              </AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          ) : (
            <Text>No category product items to show</Text>
          )}
        </>
      )}
    </VStack>
  );
};

export default Category;
