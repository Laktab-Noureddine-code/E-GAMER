import React from "react";
// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages component
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Layout from "./components/Layout";
import Main from "./pages/Home/components/Main";
import Products from "./pages/catalog/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/laptops" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
