import React from 'react';
import './BasketItem.css';

const BasketItem = ({ item, onQuantityChange, onDelete }) => {
  return (
    <div className='basket-item'>
      <img src={item.image} alt={item.title} className='basket-item-image' />
      <div className='basket-item-details'>
        <h3 className='basket-item-title'>{item.title}</h3>
        <p className='basket-item-description'>{item.description}</p>
        <div className='basket-item-quantity'>
          <button
            className='quantity-button'
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className='quantity'>{item.quantity}</span>
          <button
            className='quantity-button'
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            disabled={item.quantity === 10}
          >
            +
          </button>
        </div>
        <p className='basket-item-price'>{item.price * item.quantity}₽</p>
        <button className='delete-button' onClick={() => onDelete(item.id)}>
          <img src='https://cdn-icons-png.flaticon.com/512/54/54324.png' alt='Удалить' />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
