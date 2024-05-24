import { useRouteError, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export default function ErrorPage() {
  const error = useRouteError() as any;
  const navigate = useNavigate();
  console.error(error);

  return (
    <VStack w={"100%"}>
      <NavBar />
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="60vh"
        width={"80%"}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Oops!
        </AlertTitle>
        <AlertDescription mt={4} maxWidth="sm">
          Sorry, an unexpected error has occurred.
        </AlertDescription>
        <AlertDescription mt={4} maxWidth="sm" fontWeight={600}>
          {error.statusText || error.message}
        </AlertDescription>

        <AlertDescription mt={4} maxWidth="sm" fontWeight={600}>
          {"Please try again later"}
        </AlertDescription>

        <Button
          mt={4}
          leftIcon={<ArrowLeftIcon />}
          colorScheme="red"
          variant="outline"
          aria-label="back to home page"
          fontSize="20px"
          onClick={() => {
            navigate("/");
          }}
        >
          Home page
        </Button>
      </Alert>
    </VStack>
  );
}
