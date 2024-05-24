import { Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Center w={"100%"} h="60px" borderBottom={"2px solid #d9d9d9"} pb={3}>
      <Link to="/">
        <Text fontSize={"xx-large"} fontWeight={700}>
          Modern Walk
        </Text>
      </Link>
    </Center>
  );
};

export default NavBar;
