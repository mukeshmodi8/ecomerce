import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Computers.css";

const Computers = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const products = [
        {
          id: 1,
          name: "LG Computer",
          price: 22000.00,
          image:
            "https://4.imimg.com/data4/DS/QN/MY-3561865/lg-desktop-computer.jpg",
        },
        {
          id: 2,
          name: "HP Laptop",
          price: 55000.00,
          image:
            "https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/y/l/p/-original-imagp7pfjzskhwan.jpeg?q=90&crop=false",
        },
        {
          id: 3,
          name: "Acer Laptop",
          price: 25000.00,
          image:
            "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732187805/Croma%20Assets/Computers%20Peripherals/Laptop/Images/311051_0_xkl2ks.png?tr=w-600",
        },
        {
          id: 4,
          name: "CHIST Core i5",
          price: 28000.00,
          image:
            "https://m.media-amazon.com/images/I/41RbCADklWL.jpg",
        },
        {
          id: 5,
          name: "intel",
          price: 670000.00,
          image:
            "https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png",
        },
        {
          id: 6,
          name: "Lenovo IdeaCentre AIO i Gen 9",
          price: 50460.00,
          image: "https://p1-ofp.static.pub//fes/cms/2024/12/26/kpu7phlx5is9ipou525sk15tzregl5941256.png",
        },
      ];
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">Our Shop Brand Products</h1>
            <h3 className="text-center text-black-40 mb-4">Best Quality Product</h3>
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

export default Computers;
