import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ✅ Dummy product data
const dummyProducts = {
  shoes: [
    {
      id: "s1",
      title: "Running Shoes",
      image: "https://via.placeholder.com/150",
      price: 59.99,
    },
    {
      id: "s2",
      title: "Sneakers",
      image: "https://via.placeholder.com/150",
      price: 45.0,
    },
  ],
  tees: [
    {
      id: "t1",
      title: "Plain White Tee",
      image: "https://via.placeholder.com/150",
      price: 15.5,
    },
    {
      id: "t2",
      title: "Graphic Tee",
      image: "https://via.placeholder.com/150",
      price: 22.99,
    },
  ],
  bags: [
    {
      id: "b1",
      title: "Laptop Backpack",
      image: "https://via.placeholder.com/150",
      price: 39.99,
    },
    {
      id: "b2",
      title: "Travel Duffel",
      image: "https://via.placeholder.com/150",
      price: 55.0,
    },
  ],
};

// ✅ Category metadata
const categoryData = {
  shoes: {
    title: "Shoes",
    url: "shoes",
  },
  tees: {
    title: "T-Shirts",
    url: "tees",
  },
  bags: {
    title: "Bags",
    url: "bags",
  },
};

const Product = () => {
  const { category } = useParams(); // e.g., /products/shoes
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const catInfo = categoryData[category];

    if (!catInfo) {
      console.error("Invalid category");
      return;
    }

    // Simulate fetch using switch case and dummy data
    switch (catInfo.url) {
      case "shoes":
        setProducts(dummyProducts.shoes);
        break;
      case "tees":
        setProducts(dummyProducts.tees);
        break;
      case "bags":
        setProducts(dummyProducts.bags);
        break;
      default:
        setProducts([]);
    }
  }, [category]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {categoryData[category]?.title || "Products"}
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full max-w-md mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-cover mb-3 rounded"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;

