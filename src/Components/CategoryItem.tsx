import { Card, CardBody, Text, Link } from "@chakra-ui/react";

const CategoryItem = ({
  name,
  id,
  bgColor,
}: {
  name: string;
  id: number;
  bgColor: string;
}) => {
  return (
    <Link href={`/category/${id}`}>
      <Card bg={bgColor}>
        <CardBody>
          <Text fontSize={"xx-large"} color={"white"}>
            {name}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CategoryItem;
