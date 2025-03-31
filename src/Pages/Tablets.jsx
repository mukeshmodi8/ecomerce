import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tablets.css";

const Tablets = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const products = [
        { id: 1, name: "Samsung Galaxy Tablet", price: 32000.00, image: "" },
        { id: 2, name: "Apple iPad Pro", price: 85000.00, image: "" },
        { id: 3, name: "Lenovo Tab M10", price: 15000.00, image: "" },
        { id: 4, name: "Microsoft Surface Pro", price: 90000.00, image: "" },
        { id: 5, name: "Huawei MatePad", price: 28000.00, image: "" },
        { id: 6, name: "Realme Pad", price: 18000.00, image: "" },
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">Our Shop Brand Tablets</h1>
            <h3 className="text-center text-black-40 mb-4">Best Quality Tablets</h3>
            <h6 className="text-center text-black-50">
                Our customers' feedback reflects the quality and reliability of our brand.<br/>
                Their satisfaction is our greatest motivation, and we take pride in living up to their trust.
            </h6>
            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card computer-card text-center shadow-sm p-3">
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

export default Tablets;
