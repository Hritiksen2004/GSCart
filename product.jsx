import "../App.css";
import CartButton from "../CartButton";
// This code is for understing how props come inside the component when it pass at the time of calling that component
/* export const Product = (props) => { */

/* return (
        <div className='product' >
                <img src={props.product?.images[0]} alt={props.product?.title} height={200} width={150} />
                <p>{props.product?.title}</p>
                <p>{props.product?.price}</p>
                <button onClick={() => props.addToCart(props.product)}>Add to cart</button>
        </div>
    ) */
// This code shows the destructuring of the props object
export const Product = ({
  product,
  addToCart,
  productDetail,
  cart,
  setCart,
  openCart,
}) => {
  return (
    // When you click anywhere on this card, it calls productDetail()
    // and passes the product's ID to the parent component  — this will usually open the product details page.
    <div className="product" onClick={() => productDetail(product.id)}>
      <img
        src={product?.images[0]}
        alt={product?.title}
        height={200}
        width={150}
      />
      <p>{product?.title}</p>
      <p>{product?.price}</p>

      {/* "Add to cart" button.
                When clicked, it calls addToCart() and passes the entire product object
                so it can be added to the user's shopping cart.
            */}
      <CartButton
        product={product}
        cart={cart}
        setCart={setCart}
        openCart={openCart}
      />
      {/* <button className="addtocartbtn" onClick={(e) => addToCart(e, product)}>
        Add to cart
      </button> */}
    </div>
  );
};
