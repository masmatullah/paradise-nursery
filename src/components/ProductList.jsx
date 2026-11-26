import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Air Purifying Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
  {
    id: 5,
    name: "Aloe Vera",
    category: "Air Purifying Plants",
    price: 10,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  {
    id: 7,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
  },
  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1566907225472-514a2b2e0c3b",
  },
  {
    id: 9,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 16,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
  {
    id: 10,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 14,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
  {
    id: 11,
    name: "Marigold",
    category: "Flowering Plants",
    price: 11,
    image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab",
  },
  {
    id: 12,
    name: "Petunia",
    category: "Flowering Plants",
    price: 13,
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
  },

  {
    id: 13,
    name: "Echeveria",
    category: "Succulents",
    price: 9,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 14,
    name: "Jade Plant",
    category: "Succulents",
    price: 12,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 15,
    name: "Zebra Cactus",
    category: "Succulents",
    price: 14,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 16,
    name: "String of Pearls",
    category: "Succulents",
    price: 17,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 17,
    name: "Haworthia",
    category: "Succulents",
    price: 10,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 18,
    name: "Sedum",
    category: "Succulents",
    price: 11,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((p) => p.category))];

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-container">
      <h1>Our Beautiful Plants 🌿</h1>

      <h3>Shopping Cart: 🛒 {cartCount} Items</h3>

      {categories.map((category) => (
        <div className="category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;