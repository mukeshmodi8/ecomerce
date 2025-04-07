import React from "react";
import "./Sale.css";

const Sale = () => {
  return (
    <section className="sale-section text-white">
      <div className="overlay">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4 animate-title">🔥 Mega Sale is Live! 🔥</h1>
          <p className="lead mb-4">Up to <span className="highlight">70% OFF</span> on top mobile gadgets and accessories!</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#products" className="btn btn-danger btn-lg shadow">Shop Now</a>
            <a href="#offers" className="btn btn-outline-light btn-lg shadow">View Offers</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
