import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./App.tsx";
import ErrorPage from "./routes/error-page.tsx";
import ItemDetails from "./routes/item-details.tsx";
import Category from "./routes/category.tsx";
import Home from "./routes/home.tsx";
import MensClothing from "./routes/mens-clothing.tsx";
import WomensClothing from "./routes/womens-clothing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "category/:categoryId",
        element: <Category />,
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
