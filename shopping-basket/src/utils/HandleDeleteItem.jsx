const handleDeleteItem = (basketItems, setBasketItems) => (itemId) => {
    const updatedItems = basketItems.filter(item => item.id !== itemId);
    setBasketItems(updatedItems);
  };
  
export default handleDeleteItem;
  