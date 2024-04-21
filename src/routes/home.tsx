import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data: any = useLoaderData();
  console.log(data);

  return <div>Home</div>;
};

export default Home;
