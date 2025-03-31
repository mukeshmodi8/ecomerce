import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tvHomeCinema.css";

const TVHomeCinema = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const products = [
        { id: 1, name: "Samsung 55' 4K Smart TV", price: 65000.00, image: "" },
        { id: 2, name: "LG 65' OLED TV", price: 180000.00, image: "" },
        { id: 3, name: "Sony Bravia 75' 4K HDR TV", price: 220000.00, image: "" },
        { id: 4, name: "Mi 43' Smart TV", price: 32000.00, image: "" },
        { id: 5, name: "Bose Home Theater System", price: 85000.00, image: "" },
        { id: 6, name: "Sony Home Cinema System", price: 95000.00, image: "" },
        { id: 7, name: "JBL Soundbar", price: 25000.00, image: "" },
        { id: 8, name: "Philips Home Theater", price: 30000.00, image: "" },
        { id: 9, name: "Samsung QLED TV", price: 150000.00, image: "" },
        { id: 10, name: "LG Soundbar", price: 20000.00, image: "" },
        
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">T.V & Home Cinema</h1>
            <h3 className="text-center text-black-40 mb-4">Best Quality Entertainment Products</h3>
            <h6 className="text-center text-black-50">
                Enjoy the ultimate cinematic experience at home with our top-quality TVs & Home Cinema systems.<br/>
                Trusted by thousands of happy customers!
            </h6>
            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card tv-cinema-card text-center shadow-sm p-3">
                            <img src={product.image} alt={product.name} className="card-img-top product-image" />
                            <div className=" tv card-body">
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

export default TVHomeCinema;
