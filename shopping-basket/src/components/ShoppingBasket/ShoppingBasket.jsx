import React, { useState } from 'react';
import './ShoppingBasket.css';
import Basket from '../Basket/Basket';
import TotalAmount from '../TotalAmount/TotalAmount';
import testBasketItems from '../../utils/MockData'
import handleQuantityChange from '../../utils/QuantityChange';
import handleDeleteItem from '../../utils/HandleDeleteItem';

const ShoppingBasket = () => {
  const [basketItems, setBasketItems] = useState(testBasketItems);
  const handleQuantity = handleQuantityChange(basketItems, setBasketItems);
  const handleDelete = handleDeleteItem(basketItems, setBasketItems);

  return (
    <div className="shopping-cart">
      <div className="left-column">
        <Basket 
          basketItems={basketItems} 
          onQuantityChange={handleQuantity} 
          onDelete={handleDelete} 
        />
      </div>
      <div className="right-column">
        <TotalAmount basketItems={basketItems} />
      </div>
    </div>
  );
};

export default ShoppingBasket;
