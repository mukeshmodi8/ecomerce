import React from "react";
import Slider from "react-slick";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SaleProducts.css";

const products = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 1000 + i * 100,
  discount: 70,
  image: `https://dummyimage.com/300x300/000/fff&text=Product+${i + 1}`,
}));

const SaleProducts = () => {
  const { addToCart } = useCart();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const gridProducts = products.slice(0, 6);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">🛒 70% OFF Products</h2>

      {/* Product Slider */}
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="card h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">Original: ₹{product.price}</p>
                <p className="text-success fw-bold">
                  Now: ₹{Math.round(product.price * 0.3)}
                </p>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Grid Layout */}
      <h4 className="mt-5 mb-3">✨ Best Picks for You</h4>
      <div className="row">
        {gridProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">Original: ₹{product.price}</p>
                <p className="text-success fw-bold">
                  Now: ₹{Math.round(product.price * 0.3)}
                </p>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
