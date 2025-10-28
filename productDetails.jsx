import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "./product";
import Reviews from "../review";
import CartButton from "../CartButton";

const ProductDetail = ({ cart, setCart, openCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const item = await res.json();
        setProduct(item);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}/reviews`);
        const data = await res.json();
        setReviews(data.reviews || []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    getReviews();
  }, [id]);

  const addToCart = (e, product) => {
    e.stopPropagation();
    setCart((previous) => [...previous, product]);
    setIsCartOpen(true);
  };

  if (!product) return <h3>Loading...</h3>;

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        Back
      </button>

      <div className="product-image-section">
        <img
          src={product?.images?.[0]}
          alt={product?.title}
          className="product-detail-image"
        />
      </div>

      {/* Product Info */}
      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>

        <p className="product-price">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="product-rating">
          ⭐ <strong>{product.rating}</strong> / 5
        </p>
        <p className="product-reviews">
          👁️ <strong>{product.stock}</strong> Reviews
        </p>

        <CartButton
          product={product}
          cart={cart}
          setCart={setCart}
          openCart={openCart}
        />
        <div className="reviews-section">
          <h3>Customer Reviews</h3>
          {Array.isArray(reviews) && reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div key={index} className="review-card">
                <p>
                  <strong>{rev.reviewerName}</strong> ({rev.reviewerEmail})
                </p>
                <p>⭐ Rating: {rev.rating}</p>
                <p>{rev.comment}</p>
                <small> {new Date(rev.date).toLocaleDateString()}</small>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>

        <div className="sub-links">
          <NavLink to="rating" className="nav-link">
            Ratings
          </NavLink>
          <NavLink to="reviews" className="nav-link">
            Reviews
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default ProductDetail;
