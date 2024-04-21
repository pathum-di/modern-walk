import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./App.tsx";
import ErrorPage from "./routes/error-page.tsx";
import ItemDetails from "./routes/item-details.tsx";
import Categories from "./routes/categories.tsx";
import Home from "./routes/home.tsx";
import MensClothing from "./routes/mens-clothing.tsx";
import WomensClothing from "./routes/womens-clothing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "mens-clothing",
        element: <MensClothing />,
      },
      {
        path: "womens-clothing",
        element: <WomensClothing />,
      },
      {
        path: "item-details/:itemId",
        element: <ItemDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
