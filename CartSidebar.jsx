const CartSidebar = ({ cart, removeFromCart, isOpen, setIsOpen }) => {
const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Please, Select atleast one product!");
    removeFromCart([]);            
    setIsOpen(false);   
    }
  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-thumb"
              />
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <h4>Total: ₹{total}</h4>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
