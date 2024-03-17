import React from 'react';
import BasketItem from '../BasketItem/BasketItem';

const Basket = ({ basketItems, onQuantityChange, onDelete }) => {
  return (
    <div className='basket-container'>
      <h2 className='title'>Корзина товаров</h2>
      <div className='basket-items'>
        {basketItems && basketItems.map(item => (
          <BasketItem 
            key={item.id} 
            item={item} 
            onQuantityChange={onQuantityChange} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default Basket;
