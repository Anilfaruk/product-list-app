import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductsCard from "../components/ProductsCard";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>
        setFilteredProducts(
          res.data.filter((item) => item.category === selectedCategory)
        )
      );
  }, [selectedCategory]);

  // console.log("categories", categories);
  console.log("selectedCategory", selectedCategory);
  console.log("filteredProducts", filteredProducts);
  return (
    <div>
      <Header
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsCard filteredProducts={filteredProducts} />
    </div>
  );
};

export default Home;
