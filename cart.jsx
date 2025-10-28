import ProductDetail from "./components/productDetails"
const Cart = (cart, setCart) => {
    return (
    <div>
        <p>Cart</p>
        <ProductDetail cart={cart} setCart={setCart} />
        </div>
    )
}

export default Cart