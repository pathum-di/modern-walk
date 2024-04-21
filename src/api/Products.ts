import { PRODUCTS_API } from "../Config";
import { Product } from "../models/Product";

export const fetchProducts = async (
  sort?: string,
  limit?: number,
): Promise<Product[]> => {
  try {
    let url = `${PRODUCTS_API}/products?`;
    if (sort !== undefined) {
      url += `sort=${sort}&`;
    }
    if (limit !== undefined) {
      url += `limit=${limit}`;
    }

    const response = await fetch(url);
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchSingleProduct = async (
  productId: number,
): Promise<Product> => {
  try {
    const response = await fetch(`${PRODUCTS_API}/products/${productId}`);
    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const fetchProductCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${PRODUCTS_API}/products/categories`);
    const categories: string[] = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching product categories:", error);
    throw error; // Re-throw the error to handle it externally if needed
  }
};
