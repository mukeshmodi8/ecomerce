import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./drones.css";

const DronesCameras = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const products = [
        {
          id: 1,
          name: "DJI Mavic Air 2",
          price: 85000.00,
          image: "https://store.dji.com/cdn/shop/products/Mavic_Air_2_1_2048x.jpg"
        },
        {
          id: 2,
          name: "DJI Mini 3 Pro",
          price: 95000.00,
          image: "https://store.dji.com/cdn/shop/products/Mini3Pro.jpg"
        },
        {
          id: 3,
          name: "GoPro HERO 10",
          price: 40000.00,
          image: "https://gopro.com/content/dam/gopro-store/homepage-module/HERO10_Black_Front.jpg"
        },
        {
          id: 4,
          name: "Canon EOS R5",
          price: 290000.00,
          image: "https://www.canon.co.in/media/eos-r5-main-product-image_tcm14-2003926.jpg"
        },
        {
          id: 5,
          name: "Sony Alpha 7 IV",
          price: 250000.00,
          image: "https://www.sony.co.in/image/3b52c439c2b1155a0b9c59e6dbb601d4?fmt=png-alpha&wid=660"
        },
        {
          id: 6,
          name: "Autel EVO Lite+",
          price: 130000.00,
          image: "https://cdn.shopify.com/s/files/1/0549/2761/2221/products/evo-lite-series-lifestyle-orange_600x600.jpg"
        }
      ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">Drones & Cameras</h1>
            <h3 className="text-center text-black-40 mb-4">Best Quality Drones & Cameras</h3>
            <h6 className="text-center text-black-50">
                Our customers' feedback reflects the quality and reliability of our brand.<br/>
                Their satisfaction is our greatest motivation, and we take pride in living up to their trust.
            </h6>
            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card drone-card text-center shadow-sm p-3">
                            <img src={product.image} alt={product.name} className="card-img-top logo-image" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6>Price : Rs.{product.price.toFixed(2)}</h6>
                                <button onClick={() => addToCart(product)} className="btn btn-success mx-2">Add to Cart</button>
                                <a href="#" className="btn btn-primary product-btn">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DronesCameras;
