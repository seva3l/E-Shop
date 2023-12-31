import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import IProduct from "../../interface/Product";
import items from "../../../items.json";

type SetCategoriesFunction = React.Dispatch<
  React.SetStateAction<ICategories[]>
>;
export interface ProductContextValue {
  products: IProduct[];
  fetchProducts: () => void;
  sortProductsByUnitPrice: (ascending: boolean) => void;
  searchProductsByName: (searchText: string) => void;
  categories: ICategories[];
  filterProductsByCategory: (category: string) => void;
  extractCategories: (products: IProduct[]) => void;
  originalProducts: IProduct[];
  setCategories: SetCategoriesFunction;
}

export interface ICategories {
  label: string;
  value: string;
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  originalProducts: [],
  fetchProducts: () => {},
  sortProductsByUnitPrice: (ascending) => {},
  searchProductsByName: (searchText) => {},
  categories: [], // Initially, no categories are available
  filterProductsByCategory: (category) => {},
  extractCategories: (products) => {},
  setCategories: () => {},
});

export const ProductProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const fetchProducts = () => {
    setProducts(items);
    setOriginalProducts(items);
  };

  useEffect(() => {
    extractCategories(originalProducts);
  }, [originalProducts, products]);

  const sortProductsByUnitPrice = (ascending: boolean) => {
    // Create a copy of the products array to avoid modifying the original
    const sortedProducts = [...products];

    // Sort the products based on unitPrice
    sortedProducts.sort((a, b) => {
      if (ascending) {
        return a.unitPrice - b.unitPrice;
      } else {
        return b.unitPrice - a.unitPrice;
      }
    });
    // Update the products state with the sorted array
    setProducts(sortedProducts);
  };

  const extractCategories = (productList: IProduct[]) => {
    const uniqueCategories = [
      ...new Set(productList.map((product) => product.category)),
    ];
    const categoryList = uniqueCategories.map((category) => ({
      label: category,
      value: category,
    }));
    setCategories(categoryList);
  };
  const searchProductsByName = (searchText: string) => {
    // Filter products based on productName containing the searchText
    const filteredProducts = items.filter((product) =>
      product.productName.toLowerCase().includes(searchText.toLowerCase())
    );

    // Update the products state with the filtered array
    setProducts(filteredProducts);
  };

  const filterProductsByCategory = (category: string) => {
    if (category !== "") {
      const filtered = originalProducts.filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    } else {
      fetchProducts();
    }
  };

  const contextValue: ProductContextValue = {
    products,
    fetchProducts,
    sortProductsByUnitPrice,
    searchProductsByName,
    categories,
    filterProductsByCategory,
    extractCategories,
    originalProducts,
    setCategories,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
