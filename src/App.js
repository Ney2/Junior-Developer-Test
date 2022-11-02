import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/addproduct';
import ListProducts from './components/listproducts';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ListProducts />} path="/" />
        <Route element={<AddProduct />} path="/add-product" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
