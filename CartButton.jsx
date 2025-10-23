const CartButton = ({ product, cart, setCart, openCart }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    setCart([...cart, product]); 
    openCart();                 
  };

  return (
    <button onClick={handleAddToCart} className="add-cart-btn">
      🛒 Add to Cart
    </button>
  );
};

export default CartButton;
