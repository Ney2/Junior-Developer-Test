import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate('/add-product');
  };

  const deleteProduct = () => {
    console.log('delete product');
  };

  return (
    <div>
      <button type="submit" onClick={() => addProduct()}>Add</button>
      <button type="submit" onClick={() => deleteProduct()}>Mass Delete</button>
    </div>
  );
};

export default Navigation;
