/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [showhide, setShowhide] = useState('');
  const navigate = useNavigate();
  const handleshowhide = (e) => {
    const { value } = e.target;
    setShowhide(value);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <h2>Product Add</h2>
        <button type="submit">Save</button>
        <button type="submit" onClick={() => handleCancel()}>Cancel</button>
      </div>

      <div>
        <form id="product_form">
          <label>
            SKU
            <input id="sku" type="string" placeholder="SKU" />
          </label>
          <label>
            Name
            <input id="name" type="string" placeholder="Name" />
          </label>
          <label>
            Price
            <input id="price" type="number" placeholder="Price" />
          </label>
          <div>
            <label>
              Type Switcher
              <select id="product_type" onChange={(e) => (handleshowhide(e))}>
                <option selected value="">Select Product Type</option>
                <option value="DVD">DVD</option>
                <option value="Book">Book</option>
                <option value="Furniture">Furniture</option>
              </select>
            </label>
          </div>

          {
         showhide === 'DVD' && (
         <div>
           <label>
             Size (MB)
             <input id="size" type="number" placeholder="Size" />
           </label>
         </div>
         )
          }

          {
            showhide === 'Book' && (
            <div>
              <label>
                Weight (KG)
                <input id="weight" type="number" placeholder="Weight" />
              </label>
            </div>
            )
          }
          {
            showhide === 'Furniture' && (
            <div>
              <label>
                Height (CM)
                <input id="height" type="number" placeholder="Height" />
              </label>
              <label>
                Width (CM)
                <input id="width" type="number" placeholder="Width" />
              </label>
              <label>
                Length (CM)
                <input id="length" type="number" placeholder="Length" />
              </label>
            </div>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
