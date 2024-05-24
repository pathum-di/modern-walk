import { Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  bgColor: string;
}

const CategoryTile = ({ name, bgColor }: Props) => {
  return (
    <Link to={`/category/${name}`}>
      <Center
        w={"100%"}
        borderRadius={"10px"}
        h={"250px"}
        bg={bgColor}
        boxShadow={"rgba(0, 0, 0, 0.1) 2.5px 2.5px 2.6px"}
        _hover={{opacity:0.5}}
      >
        <Text
          textTransform={"capitalize"}
          fontSize={"xxx-large"}
          fontWeight={500}
          color={"white"}
        >
          {name}
        </Text>
      </Center>
    </Link>
  );
};

export default CategoryTile;
