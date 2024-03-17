const calculateTotalAmount = (basketItems) => {
    let total = 0;
    basketItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
};
  
export default calculateTotalAmount;
  