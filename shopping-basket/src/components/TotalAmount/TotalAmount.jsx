import React from 'react';
import './TotalAmount.css';
import calculateTotalAmount from '../../utils/CalculateTotalAmount';

const TotalAmount = ({ basketItems }) => {
  const totalAmount = calculateTotalAmount(basketItems);

  return (
    <div className='total-amount'>
      <h2 className='title'>Общая сумма покупки:</h2>
      <p className='total-amount'>{totalAmount}₽</p>
    </div>
  );
};

export default TotalAmount;
