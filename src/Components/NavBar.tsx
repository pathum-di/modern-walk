import { Center, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Center h="50px" boxShadow={""}>
      <Link href="/">
        <Text fontSize={"xx-large"} fontWeight={700}>
          Modern Walk
        </Text>
      </Link>
    </Center>
  );
};

export default NavBar;
