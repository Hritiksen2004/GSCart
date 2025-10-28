import React, { useState, useEffect } from "react";
// Importing the Product component that will display each product card
import { Product } from "./components/product";
import "./App.css";
// Importing useNavigate hook from React Router
// useNavigate allows you to move between pages (routes) programmatically
import { useNavigate } from "react-router-dom";
import CartSidebar from "./components/CartSidebar";

import ProductDetail from "./components/productDetails";

const Home = ({ cart, setCart, isCartOpen, setIsCartOpen}) => {
  const [products, setProducts] = useState([]);
  //  [cart, setCart] = useState([]);
  
   [isCartOpen, setIsCartOpen] = useState(false);
  // Hook from React Router for navigation (used to open product detail page)
  // Here we create the instance of the useNavigate hook that will helps us to navigate to another component.
  const navigate = useNavigate();

  // Function to get product data from the API
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data?.products);
  };
  // useEffect runs automatically when the component first loads
  // Here, we call getProducts() once when the page is loaded
  useEffect(() => {
    getProducts();
  }, []); // empty [] means it runs only once after the first render

  // Another useEffect that runs whenever the cart changes
  // It logs the updated cart to the console
  useEffect(() => {
    console.log("Cart updated:");
    console.log(cart);
  }, [cart]); // runs every time 'cart' state changes

  // Function to add a product to the cart
  // const addToCart = (e, product) => {
  //   e.stopPropagation();
  //   // Updating the cart by keeping old items and adding the new one
  //   setCart((previous) => [...previous, product]);
  //   setIsCartOpen(true);
  // };
  const addToCart = (e, product) => {
    e.stopPropagation();
    setCart([...cart, product]);
    isCartOpen();
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to handle when user clicks on a product
  // It navigates to the product detail page using the product ID
  const productDetail = (id) => {
    console.log("Opening product detail for ID:", id);
    // Here its navigate to the product_detail page and we pass the product id as a search params
    // that will help us to render the specific product details
    navigate(`/product_detail/${id}`);
  };

  return (
    <div>
      <div className="topbar">
        <h2>Products</h2>
        <button className="cart-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
          🛒 Cart ({cart.length})
        </button>
      </div>

      <div className="products">
        {products.length &&
          products.map((product) => (
            <Product
              product={product}
              key={product.id}
              // addToCart={(e, product) => addToCart(e, product)}
              productDetail={(id) => productDetail(id)}
              openCart={()=>setIsCartOpen(true)}
              cart={cart}
              setCart={setCart}
            />
          ))}
      </div>

      <CartSidebar
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </div>
  );
};

export default Home;
