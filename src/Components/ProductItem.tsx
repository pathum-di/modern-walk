import { Card, CardBody, Text, Image, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  image: string;
  id: number;
  price: string;
  bgColor: string;
}

const ProductItem = ({ title, bgColor, price, image, description }: Props) => {
  return (
    <Card
      borderRadius={"10px"}
      bg={"#ffffff"}
      boxShadow={"rgba(0, 0, 0, 0.1) 2.5px 2.5px 2.6px"}
      w={"25%"}
      h={"400px"}
      _hover={{opacity:0.5}}
    >
      <CardBody p={0} bg={"#ffffff"} borderRadius={"10px"}>
        <VStack p={4} alignItems={"center"} h={"60%"}>
          <Text mb={4} textAlign={"center"} fontSize={"15px"} fontWeight={700}>
            {title}
          </Text>
          <Image
            objectFit={"cover"}
            width={"auto"}
            height={110}
            src={image}
            alt={`${title} product image`}
            mt={"auto"}
          />
        </VStack>
        <VStack bg={bgColor} borderRadius={"10px"} p={"15px"} mb={0} h={"40%"}>
          <Text
            color={"#0d42fd"}
            fontSize={"large"}
            fontWeight={600}
          >{`Rs. ${price}`}</Text>
          <Text noOfLines={4} fontSize={"15px"}>
            {description}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
