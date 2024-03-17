const handleQuantityChange = (basketItems, setBasketItems) => (itemId, newQuantity) => {
    const updatedItems = basketItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setBasketItems(updatedItems);
};
  
export default handleQuantityChange;
  